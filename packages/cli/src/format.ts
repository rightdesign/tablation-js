import type { ImportApplySummary, ImportDiff } from "@tablation/client";

/** Human-readable preview of what an install would do — mirrors the app's import dialog. */
export function printDiff(diff: ImportDiff): void {
  if (diff.template) {
    console.log(`Template: ${diff.template.name} v${diff.template.version}`);
    if (diff.template.description)
      console.log(`  ${diff.template.description}`);
    console.log("");
  }

  const line = (label: string, parts: string[]) => {
    if (parts.length > 0) console.log(`  ${label}: ${parts.join(", ")}`);
  };
  const cu = (b: { creates: unknown[]; updates: unknown[] }) => {
    const parts: string[] = [];
    if (b.creates.length > 0) parts.push(`${b.creates.length} to create`);
    if (b.updates.length > 0) parts.push(`${b.updates.length} to update`);
    return parts;
  };
  const cs = (b: { creates: unknown[]; skippedExisting: unknown[] }) => {
    const parts: string[] = [];
    if (b.creates.length > 0) parts.push(`${b.creates.length} to create`);
    if (b.skippedExisting.length > 0) {
      parts.push(`${b.skippedExisting.length} skipped (name already exists)`);
    }
    return parts;
  };

  console.log("This install will make the following changes:");
  line("Field types", cu(diff.fieldTypes));
  line("Tables", cu(diff.dataModels));
  line("Fields", cu(diff.fields));
  line("Keys", cu(diff.keys));
  line("Relationships", cu(diff.relationships));
  line("Views", cs(diff.views));
  line("Workflows", cs(diff.workflows));
  for (const s of diff.sampleRecords) {
    console.log(
      `  Sample data — ${s.label}: ${s.count} row${s.count === 1 ? "" : "s"}${
        s.willInstall
          ? ""
          : " (skipped: table already exists; sample data only installs into newly created tables)"
      }`,
    );
  }

  const conflicts = [
    ...diff.fieldTypes.conflicts.map((c) => `field type "${c.name}"`),
    ...diff.dataModels.conflicts.map((c) => `table "${c.name}"`),
  ];
  if (conflicts.length > 0) {
    console.log("");
    console.log("Naming conflicts (blocking):");
    for (const c of conflicts) {
      console.log(`  ${c} already exists here under a different id`);
    }
  }
  if (diff.unresolvedSystemFieldTypes.length > 0) {
    console.log("");
    console.log(
      `Note: couldn't match built-in type(s) ${diff.unresolvedSystemFieldTypes.join(", ")} — fields using them may fail to apply.`,
    );
  }
}

export function printApplySummary(summary: ImportApplySummary): void {
  const line = (label: string, parts: string[]) => {
    if (parts.length > 0) console.log(`  ${label}: ${parts.join(", ")}`);
  };
  const created = (n: number) => (n > 0 ? [`${n} created`] : []);

  console.log("Installed.");
  line("Field types", created(summary.fieldTypes.created));
  line("Tables", created(summary.dataModels.created));
  line("Fields", created(summary.fields.created));
  line("Keys", created(summary.keys.created));
  line("Relationships", created(summary.relationships.created));
  line("Views", [
    ...created(summary.views.created),
    ...(summary.views.skippedExisting > 0
      ? [`${summary.views.skippedExisting} skipped`]
      : []),
  ]);
  line("Workflows", [
    ...created(summary.workflows.created),
    ...(summary.workflows.skippedExisting > 0
      ? [`${summary.workflows.skippedExisting} skipped`]
      : []),
  ]);
  const sr = summary.sampleRecords;
  const srParts = [
    ...created(sr.created),
    ...(sr.skippedExistingModel > 0
      ? [`${sr.skippedExistingModel} skipped (table already existed)`]
      : []),
    ...(sr.skippedRows > 0
      ? [`${sr.skippedRows} skipped (unsatisfiable required reference)`]
      : []),
    ...(sr.droppedReferences > 0
      ? [`${sr.droppedReferences} reference value(s) dropped`]
      : []),
  ];
  line("Sample records", srParts);
}
