/* eslint-disable */
// Generated from https://app.tablation.com/api/docs-json by scripts/generate-types.ts — do not hand-edit.
// Regenerate with `pnpm --filter @tablation/client generate:types` against a running backend.

export interface paths {
    "/api": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AppController_getHello"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/health-check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AppController_healthCheck"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_authConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/sso/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_ssoConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/sso/config/logo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_ssoConfigLogo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/google/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_googleStart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/google/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_googleCallback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/sso/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_ssoStart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/sso/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_ssoCallback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/bootstrap-admin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_bootstrapAdmin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["AuthController_updateMe"];
        trace?: never;
    };
    "/api/auth/me/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["AuthController_updateMyAvatar"];
        trace?: never;
    };
    "/api/auth/my-workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_myWorkspaces"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/my-workspaces/{workspaceId}/pin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_pinWorkspace"];
        delete: operations["AuthController_unpinWorkspace"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/switch-workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_switchWorkspace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/invites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_createInvite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/invites/{token}/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_inviteWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/accept-invite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_acceptInvite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/forgot-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_forgotPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/reset-password/{token}/valid": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_resetPasswordValid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/reset-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_resetPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/magic-link": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_requestMagicLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/magic-link/consume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_consumeMagicLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/me/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_changePassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/users/access-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_accessSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["UsersController_remove"];
        options?: never;
        head?: never;
        patch: operations["UsersController_update"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List the people with access to this workspace
         * @description Returns every accepted member as { id, email, name }. `id` is the WorkspaceMembership id — the value every user-valued reference in a workspace uses (a workflow's notification recipient, a created_by/updated_by filter), so this is how to turn a person's email or name into an id.
         */
        get: operations["WorkspaceMembersController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/api-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiKeysController_list"];
        put?: never;
        post: operations["ApiKeysController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/api-keys/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ApiKeysController_revoke"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/device/authorize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DeviceAuthController_authorize"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/device/info/{userCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DeviceAuthController_getInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/device/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DeviceAuthController_confirm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/device/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DeviceAuthController_poll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RolesController_findAll"];
        put?: never;
        /**
         * Create a role
         * @description Creates a new role in the workspace. A fresh role starts with no grants — follow up with PUT model-grants/field-grants/view-grants/capabilities calls to build out its permission structure, or POST :id/clone to start from an existing role instead.
         */
        post: operations["RolesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a role
         * @description Deletes a custom role and every grant/capability tied to it. Any project role assignment using this role is cleared too — an affected member simply has no role on that project afterward (NONE access), rather than the delete being blocked. Built-in role templates cannot be deleted.
         */
        delete: operations["RolesController_remove"];
        options?: never;
        head?: never;
        patch: operations["RolesController_update"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RolesController_clone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/model-grants/{dataModelId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set a role's access level on a table
         * @description Sets the default access this role has on a table's record data (NONE/READ/WRITE/DELETE). Field-level grants (set-field-grant) can further restrict access on specific fields below this default.
         */
        put: operations["RolesController_setModelGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/field-grants/{dataFieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["RolesController_setFieldGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/button-field-grants/{buttonFieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set a role's invoke access on a button field
         * @description Sets whether this role can invoke one specific button field (NONE/EXECUTE) — a distinct axis from field-grants' READ/WRITE/DELETE, since invoking a button (which can trigger an agent action) is not reading or writing a value. Absent a row, a button inherits its model-level access (WRITE there implies EXECUTE).
         */
        put: operations["RolesController_setButtonFieldGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/view-grants/{viewId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["RolesController_setViewGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/grid-view-grants/{gridViewId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["RolesController_setGridViewGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/roles/{id}/capabilities/{capability}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Grant or revoke a role's design-time capability
         * @description Toggles a workspace-level capability (e.g. MANAGE_DATA_MODELS, MANAGE_VIEWS, MANAGE_WORKFLOWS) for this role — these gate schema/view/workflow design actions, separate from the per-table/field/view data access grants.
         */
        put: operations["RolesController_setCapability"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/projects/{projectId}/role-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectRoleAssignmentsController_findAll"];
        put?: never;
        post: operations["ProjectRoleAssignmentsController_assign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/projects/{projectId}/role-assignments/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ProjectRoleAssignmentsController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupsController_findAll"];
        put?: never;
        post: operations["GroupsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["GroupsController_update"];
        post?: never;
        delete: operations["GroupsController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups/{id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupsController_listMembers"];
        put?: never;
        post: operations["GroupsController_addMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups/{id}/members/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["GroupsController_removeMember"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups/{id}/projects/{projectId}/role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["GroupsController_setProjectRole"];
        post?: never;
        delete: operations["GroupsController_removeProjectRole"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{organizationId}/groups/{id}/workspaces/{workspaceId}/role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["GroupsController_setWorkspaceRole"];
        post?: never;
        delete: operations["GroupsController_removeWorkspaceRole"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/projects/{projectId}/group-role-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupProjectRoleAssignmentsController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/group-role-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupWorkspaceRoleAssignmentsController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a file
         * @description Multipart upload (field name "file"). Returns {storageKey, originalName, mimeType, size, width?, height?, gps?, capturedAt?} — that whole object is the value to put on a FILE-typed record field, e.g. `PATCH .../records/{id}` with `{ "<columnName>": <this response> }`. gps/capturedAt are best-effort EXIF reads (geotagged photos only) and are simply absent otherwise. Pass fieldTypeId (also multipart) to validate against that field type's allowedFileTypes/maxFileSizeBytes/dimension/aspect-ratio rules before the file is stored at all — otherwise those checks only run later, at record create/update time, by which point an oversized/wrong-type file has already been written to storage for nothing. Pass targetMediaLibrary='true' (also multipart, and mutually exclusive with fieldTypeId — no field means no allowedFileTypes/size/dimension rules to check against) to add the file straight to the workspace's Media Library with no source record/field, returning {id} (see isMediaLibraryUploadResult) the same way a Media-Library-REFERENCE fieldTypeId does. sourceMediaItemId and editState (also multipart, both ignored unless the upload targets the Media Library) are ImageEditorDialog's Annotate-tab lineage/shape-document fields (ISSUE-392) — used when the browser has already flattened a client-side annotation into a new bitmap and is uploading it directly, rather than asking the server to run a crop/rotate/resize/filter pipeline via the sibling `transform` route. editState is a JSON string, parsed server-side.
         */
        post: operations["FilesController_upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cross-load a pasted URL into a file (ISSUE-421)
         * @description Server-side fetches `url` and stores the result exactly as `upload` would have for the equivalent multipart bytes — same {storageKey, ...}/{id, storageKey} response shape, same fieldTypeId/targetMediaLibrary/sourceMediaItemId/editState routing. Used when a FILE field's clipboard paste holds a URL rather than an image blob, so the browser never downloads the bytes itself. SSRF-guarded (UrlFetchService): only http/https, and only a public host — a URL that resolves to a private/loopback/link-local address is rejected before any request is made.
         */
        post: operations["FilesController_uploadFromUrl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/{uuid}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stream a stored file
         * @description Inline by default: `Cache-Control: private, max-age=31536000, immutable`, a real `Content-Type` (the Media Library item's stored mimeType, if this storageKey has one, else an extension-based guess), and an `ETag` (the storage key — writes are immutable, so a given key's bytes never change) honoring `If-None-Match` with a bodiless 304. Pass `?download=1` to instead get `Content-Length` and `Content-Disposition: attachment` with the item's true `originalName` (not the URL's filename segment, which can differ for a transformed image — it inherits its source's name); that response is `private, no-cache` since it's a one-off save-as, not a render the browser should reuse silently.
         */
        get: operations["FilesController_download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/media-library/{id}/rows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Parse a Media Library tabular file (csv/tsv/xlsx/xls) into rows
         * @description Same `{ sheets: [...] }` shape and `sheet`/`offset`/`limit` params as `:uuid/:filename/rows` below, resolving the file by Media Library item id instead of a raw storageKey — use this when the file came from a REFERENCE field pointing at the Media Library (e.g. an Agent Skill's file input), since that's the id you actually have. Declared ahead of the generic `:uuid/:filename/rows` route below on purpose — Nest/Express matches routes in declaration order, so the literal `media-library` segment must be registered first or every request here would instead match the generic route with uuid='media-library'.
         */
        get: operations["FilesController_mediaLibraryRows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/{uuid}/{filename}/rows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Parse a stored tabular file (csv/tsv/xlsx/xls) into rows
         * @description Returns `{ sheets: [{ name, rows, rowCount, truncated }] }` — one sheet entry per xlsx/xls worksheet, a single sheet for csv/tsv. Each row is an array of `{ value, type? }` cells: `value` is always the display string, `type` is `"number"`/`"date"` when the source format actually carries that information (xlsx/xls only — csv/tsv cells are always plain text, so `type` is always absent there). `rowCount` is the sheet's true row count; `rows` is windowed by `offset`/`limit` (default 0/5000, hard cap 20000 — a `limit` above that 400s) and `truncated` is true when more rows exist past what was returned. Pass `sheet` to parse only one named xlsx/xls sheet. For a file already in the Media Library, prefer the `media-library/:id/rows` variant above instead of this raw storageKey form.
         */
        get: operations["FilesController_rows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/download-zip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Download several Media Library items as one zip
         * @description Streams a zip archive containing each of the given Media Library item ids, named with their original filenames (de-duplicated with a numeric suffix if two selected items share a name). Ids that no longer exist (already deleted) are silently skipped rather than failing the whole request; a selection that resolves to nothing yields 404. Gated the same as the rest of the Media Library admin surface (WORKSPACE_ADMIN) since it's reached from that screen's bulk-select bar.
         */
        post: operations["FilesController_downloadZip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/{uuid}/{filename}/transform": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Apply an ordered crop/rotate/resize/filter pipeline to an image
         * @description Applies the given operations, in array order (typically rotate, then crop, then resize, then any filters), to the file at {uuid}/{filename} and stores the result as a single new file — uploads are immutable, so the source is untouched and no intermediate files are written. Returns the same {storageKey, originalName, mimeType, size, width, height} shape as upload, so you can PATCH a record's FILE field with the response directly. Pass fieldTypeId to also validate the result against that field type's allowedFileTypes/maxFileSizeBytes/dimension/aspect-ratio rules — otherwise only "does the pipeline apply to the source image" is checked, and a field-specific violation would only surface later on PATCH .../records/{id}.
         */
        post: operations["FilesController_transform"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/media-library/{id}/edit-state": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * A Media Library item's Annotate-tab shape document, if any
         * @description ImageEditorDialog reads this when reopening a Media-Library-REFERENCE image to edit — a non-null result seeds the Annotate tab with the same movable/editable shapes it was saved with (ISSUE-392), instead of starting from a blank canvas. Null for an item that was never annotated (including every item that predates this column) or whose most recent save was redact-only (nothing left to re-edit once the source pixels are gone).
         */
        get: operations["FilesController_getEditState"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/media-library/{id}/crop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a Media Library image pre-cropped to a target size around its focal point (ISSUE-965)
         * @description For API/SDK consumers that cannot apply the in-app CSS `object-position` framing the frontend uses (ISSUE-964, docs/ARCHITECTURE.md §5.3) — this route renders real cropped pixels on demand. Both `w` and `h` are required integers clamped to [16, 4096]; missing, non-integer, or out-of-range 400s. The source is auto-oriented first (EXIF rotation baked into pixels before any crop geometry is computed, so a portrait phone photo crops around the visually-correct spot, not the raw sensor layout), then the largest window matching w:h's aspect ratio is cut around the item's focal point (center, [0.5, 0.5], if none was ever set) and resized to exactly w x h. Never upscales: a source too small to fill the requested size is returned at its own native resolution and correct aspect ratio instead of being stretched. Nothing is ever written to storage or the Media Library — purely on-the-fly on every call, not cached server-side beyond an in-process render cache. Animated sources (GIF, animated WebP) render only their first frame. `Cache-Control: private, no-cache` with an `ETag` that changes whenever the resolved focal point does (`If-None-Match` short-circuits to a 304, skipping the render) — deliberately not the `private, max-age=31536000, immutable` caching the plain file-download route uses, since unlike a storageKey's bytes, the focal point (and therefore this route's output) can change without the URL changing. 404 for an unknown id or an item from another workspace; 415 for a non-raster/undecodable source (SVG, PDF, video, etc.).
         */
        get: operations["FilesController_cropMediaLibraryItem"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/files/{uuid}/{filename}/filter-previews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Render a small preview of each named filter, in one batch
         * @description Downscales the file at {uuid}/{filename} to ~96px once, then renders every requested filter name against that same small buffer. Returns { [name]: "data:image/png;base64,..." } — one entry per name, skipping any that failed to render rather than failing the whole batch. Doesn't write anything to storage; this is preview-only, for the image editor's Looks list.
         */
        post: operations["FilesController_filterPreviews"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/storage-config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceStorageConfigController_get"];
        /**
         * Configure or clear this workspace's custom S3 bucket
         * @description `mode: "CUSTOM"` points this workspace at its own S3-compatible bucket/credentials — validated live against the given config before saving, so bad credentials fail fast rather than breaking uploads later. `secretAccessKey` may be omitted on an update to keep the currently-stored one. `mode: "SYSTEM_DEFAULT"` switches back to the platform-managed bucket (existing files in the old custom bucket are neither migrated nor deleted).
         */
        put: operations["WorkspaceStorageConfigController_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/identities/{identityId}/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Serve an identity's avatar image, wherever its bytes live
         * @description Resolves the avatar's storage scope server-side (platform scope, else each workspace the identity belongs to). Caller must share a workspace with the identity, or be a platform admin.
         */
        get: operations["IdentityAvatarController_avatar"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/field-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypesController_findAll"];
        put?: never;
        post: operations["FieldTypesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/field-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypesController_findOne"];
        put?: never;
        post?: never;
        delete: operations["FieldTypesController_remove"];
        options?: never;
        head?: never;
        patch: operations["FieldTypesController_update"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/field-types/{id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypesController_getUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/field-types/{id}/choice-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FieldTypesController_addChoiceOption"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/field-types/{id}/reassign-candidates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypesController_getReassignCandidates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/field-type-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypeTemplatesController_findAll"];
        put?: never;
        post: operations["FieldTypeTemplatesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/field-type-templates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypeTemplatesController_findOne"];
        put?: never;
        post?: never;
        delete: operations["FieldTypeTemplatesController_remove"];
        options?: never;
        head?: never;
        patch: operations["FieldTypeTemplatesController_update"];
        trace?: never;
    };
    "/api/field-type-templates/{id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypeTemplatesController_getUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/field-type-templates/{id}/push-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FieldTypeTemplatesController_pushPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/field-type-templates/{id}/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FieldTypeTemplatesController_push"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/media-library": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Browse this workspace’s Media Library
         * @description Every uploaded/media-linked item, newest first, each annotated with its live usage count and derived `orphaned` flag (zero usage — safe-to-clean-up signal, never auto-deleted). `search` matches any text field, including custom ones.
         */
        get: operations["MediaLibraryAdminController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/media-library/{id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Which records/fields currently reference this item */
        get: operations["MediaLibraryAdminController_getUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/media-library/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete an orphaned Media Library item
         * @description Only allowed when the item has zero live references (409 otherwise) — dedup means a single item row can be the only copy behind several unrelated fields, so deleting a still-referenced item is never allowed, admin override included. Remove the reference(s) first (or delete the referencing record(s)), which is what drops usage to zero.
         */
        delete: operations["MediaLibraryAdminController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_liveUpdates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findAll"];
        put?: never;
        /**
         * Create a table (data model)
         * @description Creates a new table in a project (or at workspace level). Add fields afterward with POST /data-models/{id}/fields — a new table starts with only its built-in system fields.
         */
        post: operations["DataModelsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findOne"];
        put?: never;
        post?: never;
        /**
         * Delete a table
         * @description Permanently deletes a table and all of its records. Fails with 409 if another table still references it (a Row Reference field or a Relationship) or a View still has a component bound to it — remove those first.
         */
        delete: operations["DataModelsController_remove"];
        options?: never;
        head?: never;
        patch: operations["DataModelsController_update"];
        trace?: never;
    };
    "/api/data-models/{id}/access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_getAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/field-access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_getFieldAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_getCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/retention-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Preview how many rows a retention setting would age out */
        get: operations["DataModelsController_previewRetention"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/reverse-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List reverse references (fields on other models that point at this one) */
        get: operations["DataModelsController_getReverseReferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["DataModelsController_move"];
        trace?: never;
    };
    "/api/data-models/{id}/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add a field to a table
         * @description Adds a new field/column to an existing table. Use GET /field-types to see available field kinds (TEXT, NUMBER, FILE, reference types, etc.) and their configurable constraints before calling this.
         */
        post: operations["DataModelsController_addField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/fields/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["DataModelsController_reorderFields"];
        trace?: never;
    };
    "/api/data-models/{id}/fields/{fieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DataModelsController_deleteField"];
        options?: never;
        head?: never;
        patch: operations["DataModelsController_updateField"];
        trace?: never;
    };
    "/api/data-models/{id}/keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findKeys"];
        put?: never;
        post: operations["DataModelsController_addKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findRules"];
        put?: never;
        post: operations["DataModelsController_addRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/rules/{ruleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DataModelsController_deleteRule"];
        options?: never;
        head?: never;
        patch: operations["DataModelsController_updateRule"];
        trace?: never;
    };
    "/api/data-models/{id}/rules/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DataModelsController_reorderRules"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findWebhooks"];
        put?: never;
        post: operations["DataModelsController_createWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DataModelsController_revokeWebhook"];
        options?: never;
        head?: never;
        patch: operations["DataModelsController_updateWebhook"];
        trace?: never;
    };
    "/api/data-models/{id}/vendor-webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataModelsController_findVendorWebhooks"];
        put?: never;
        post: operations["DataModelsController_createVendorWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{id}/vendor-webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DataModelsController_revokeVendorWebhook"];
        options?: never;
        head?: never;
        patch: operations["DataModelsController_updateVendorWebhook"];
        trace?: never;
    };
    "/api/webhooks/intake/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TableWebhookIntakeController_intake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_list"];
        put?: never;
        /**
         * Create a record
         * @description Keys are field columnNames (see GET /data-models/{id}), not display names. A markdown-typed field just takes a markdown string value — there is no separate "compose markdown" tool. The whole set of columns goes inside this "body" argument as one JSON object — including a column literally named "body"; it nests as a value inside this object like any other column, it does not replace this argument.
         */
        post: operations["RecordsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List/filter records with a complex filter expression
         * @description `filters` is a nestable AND/OR filter tree, not a flat list — it's a `{ "combinator": "AND" | "OR", "conditions": FilterNode[] }` group, where each FilterNode is either a nested group (for grouping, e.g. `(A AND B) OR C`) or a leaf condition `{ "columnName": string, "operator": FilterOperator, "value"?: unknown }`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name — that same call's fieldType.baseType tells you which operators make sense: STRING/TEXT → EQ/NEQ/CONTAINS/NOT_CONTAINS/LIKE/NOT_LIKE/IN/NOT_IN/IS_NULL/IS_NOT_NULL; NUMBER/DATE/DATETIME → EQ/NEQ/GT/GTE/LT/LTE/IN/NOT_IN/IS_NULL/IS_NOT_NULL; BOOLEAN → EQ/NEQ/IS_NULL/IS_NOT_NULL. GET .../records' `filters` query param (and this controller's `count`/`aggregate`/`group-counts`/`group-aggregate`) takes the same tree, URL-encoded, plus a flat-array shorthand — see those operations' own docs.
         */
        post: operations["RecordsController_query"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Count matching records
         * @description Returns `{"count": number}` — a real `SELECT COUNT(*)` over every row matching `filters`/`search`, not just the current page. Prefer this over paging through `list()`/`POST .../query` just to size a result set.
         */
        get: operations["RecordsController_count"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Compute a single SUM/AVG/MIN/MAX/COUNT over matching records
         * @description A true aggregate computed in SQL over every row matching `filters`/`search`, not just whatever page `list()` returned — for a single number (e.g. "total revenue"). For a per-group breakdown ("revenue by region") use `group-aggregate` instead.
         */
        get: operations["RecordsController_aggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/group-counts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Count matching records, broken down by one or more grouping columns
         * @description True per-group counts computed in SQL — for "how many per status/region/etc.", not just a single total (use `count` for that). For a per-group SUM/AVG/MIN/MAX instead of a count, use `group-aggregate`.
         */
        get: operations["RecordsController_groupCounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/group-aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Compute one or more SUM/AVG/MIN/MAX/COUNT metrics, broken down by group
         * @description The grouped counterpart of `aggregate` — true per-group aggregates computed in SQL, e.g. "sum of revenue by region". Takes one or more metrics at once (each its own column/op/alias), unlike `aggregate` which computes exactly one number.
         */
        get: operations["RecordsController_groupAggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/path-children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List one folder level of a PATH-format field
         * @description The distinct next `/`-segment under `prefix` across every matching row, each with `hasChildren` (further segments exist beneath it) and `recordId` (the record stored at exactly that path, or null for a synthetic record-less folder). `pathColumn` must be a STRING field whose `stringFormat` is `PATH`.
         */
        get: operations["RecordsController_pathChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/recently-deleted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_listRecentlyDeleted"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/trash": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List soft-deleted records
         * @description A paginated/filterable/sortable listing over this model's trashed rows, not the capped `recently-deleted` toast feed. A WORKSPACE_ADMIN/PLATFORM_ADMIN sees every trashed row; anyone else with DELETE access sees only rows they themselves deleted.
         */
        get: operations["RecordsController_listTrash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/trash/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_countTrash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_findOne"];
        put?: never;
        post?: never;
        delete: operations["RecordsController_remove"];
        options?: never;
        head?: never;
        /**
         * Update a record
         * @description Partial update — only the fields present in the body are changed. Keys are field columnNames (see GET /data-models/{id}), not display names. Changed columns go inside this "body" argument as one JSON object — including a column literally named "body"; it nests as a value inside this object like any other column, it does not replace this argument.
         */
        patch: operations["RecordsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/related": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a record scoped to a parent record via a REFERENCE field
         * @description Same as POST / except one field — referenceFieldId, a REFERENCE DataField on this model whose target is parentModelId — is forced server-side to parentRecordId, overwriting any value the body supplies for it. Used by RecordEditDrawer's Related section to append a child record (e.g. a comment) without trusting the client for the parent link.
         */
        post: operations["RecordsController_createRelated"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/move-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_movePreview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_move"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create or upsert many records in one call
         * @description Body: `{ "records": [{...values}, ...], "matchOn"?: string[] }`. Keys inside each record are field columnNames (see GET /data-models/{id}), not display names. Without "matchOn" every entry is created. With "matchOn" (a list of columnNames), each entry is matched against existing rows by equality on those columns' values in the entry — a match is updated, otherwise the entry is created. Response is `{ results: [{index, id?, action: "created"|"updated"|"error", error?}], created, updated, errors }` — one bad entry does not fail the rest of the batch. Capped at 500 records per call, but an agent should keep each call to about 20-25 records: that server-side cap is on record count, not on the size of the generated arguments — a call near it can exceed the model's own output-token budget and get cut off before this endpoint ever sees it (ISSUE-874).
         */
        post: operations["RecordsController_bulk"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/import-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Import rows from a Media Library file using an agent-authored recipe
         * @description Body: `{ "fileId": string, "sheet"?: string, "recipe": {...} }`. `fileId` is a Media Library item id in this workspace (e.g. from an Agent Skill's file input) — read its rows first with GET .../files/media-library/{fileId}/rows to work out the recipe below before calling this. `sheet` selects one sheet of an xlsx/xls workbook (default: the first sheet); ignored for csv/tsv.
         *
         *     The recipe:
         *     - `columnMapping` (required): source header (as it appears in the file's header row) -> target field columnName (see GET /data-models/{id} for columnNames).
         *     - `matchOn` (optional): columnNames to upsert-match existing rows on (AND of all values). Omitted/empty means every row is created.
         *     - `layout` (optional), for a sheet that is not a plain header-row-then-data-rows table:
         *       - `groupHeadingToColumn`: a row with a single non-empty first cell above a header row is a group heading — its value is written into every row in that group's own copy of this target columnName.
         *       - `headerRowMatches`: `"first"` (default) treats only the first non-heading row as the header; `"mapping"` re-detects a header row anywhere it recurs (for a file whose header repeats after every group heading).
         *       - `skipTrailingRowPerGroup`: drop the last row of each group (a subtotal/blank row) before the next group heading. Position-based — wrong for a group whose real data legitimately ends with no trailing summary row; prefer `skipRowsWhereBlank` when the summary row is identifiable by its own content instead.
         *       - `skipRowsWhereBlank`: source header names (e.g. `["Name"]`) — drop any row where every one of these columns is blank, regardless of its position within a group.
         *       - `skipBlankRows`: drop any row where every cell is blank.
         *       - `skipFirstRow`: drop the very first row of the sheet (a title row above the real header).
         *     - `missingChoiceOption` (`"create"|"reject"`, default `"reject"`): what to do when a mapped CHOICE field's value isn't an existing option.
         *     - `missingReference` (`"create"|"reject"|"blank"`, default `"reject"`): what to do when a mapped REFERENCE field's value doesn't match an existing target record by its display column. `"create"` creates the target record from that value alone — if the target table has other required fields, that creation fails; a required field on *this* import then fails the row (recorded in `errors`, naming the target table and the missing field(s)), but an optional one is left blank instead (recorded in `warnings`, not `errors` — the row still imports). `"create"` against a system table (Media Library, Agents, …) is always refused up front with a clear message and the same required/optional fallback, since a plain text value can never become one of those records. Both `"create"` and `"reject"` apply regardless of the field type's own stored `allowAdditions` setting — the recipe is the agent's explicit intent for this one import.
         *     - `references` (optional): per-column override of `missingReference`, keyed by the target field's columnName — e.g. `{ "important_files": "blank" }` to blank just that column while every other unmatched reference still uses the recipe's global policy.
         *     - `onDuplicateKeyInFile` (`"reject"|"last-wins"`, default `"reject"`): what to do when two or more rows in this same file resolve to the same `matchOn` key. Sequential upsert processing would otherwise let the later row silently overwrite the earlier one with no error, which is very rarely what's wanted — `"reject"` instead fails every row sharing a duplicated key (named in `errors`, with the row numbers involved) so the caller can add a distinguishing column to `matchOn`. `"last-wins"` restores the old silent-overwrite behavior for a recipe that genuinely wants it.
         *     - `resultRecord` (optional): `{ dataModelId, recordId, fields?: { imported?, errors?, importTimestamp?, importedRowCount?, fileRowCount? } }` — each named columnName gets the corresponding result value written onto that record, so the caller doesn't have to. `imported` is a "did this run import anything" boolean flag (true when created+updated > 0), distinct from the numeric `importedRowCount`.
         *
         *     Response: `{ fileRowCount, dataRowCount, created, updated, errors: [{row, message, group?}], warnings: [{row, message, group?}], truncatedErrors, resultRecordError? }`. `row` is the file's own 1-based row number (not an index into some internal flattened/grouped representation), and `group` (when the recipe used `layout.groupHeadingToColumn`) is that row's group heading value — both are there so a person can actually find the row in the source file. A bad row never aborts the rest of the file — `errors` (capped, see `truncatedErrors`) is how the caller finds out what to fix; `warnings` are non-fatal notes about rows that still imported. The import itself and the optional `resultRecord` write are independent: if the import succeeds but writing `resultRecord` fails (e.g. a field/value mismatch), the response is still success with the real counts, plus `resultRecordError` naming what went wrong — do not treat that as the whole import having failed, and don't retry the import over it; write the result yourself instead if it matters. Runs synchronously; a file in the tens of thousands of rows is expected to take low minutes, not something to retry as a timeout.
         */
        post: operations["RecordsController_importFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/bulk-delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_removeMany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/undo-delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_undoDelete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}/purge-now": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_purgeNow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/trash/purge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_purgeMany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_listHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}/history/{historyId}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordsController_restoreVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}/lock": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordLocksController_acquire"];
        delete: operations["RecordLocksController_release"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/records/{recordId}/lock/release-beacon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordLocksController_releaseBeacon"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacePropertiesController_findAll"];
        put?: never;
        post: operations["WorkspacePropertiesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/properties/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["WorkspacePropertiesController_reorder"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/properties/values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacePropertiesController_getValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["WorkspacePropertiesController_setValues"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/properties/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["WorkspacePropertiesController_remove"];
        options?: never;
        head?: never;
        patch: operations["WorkspacePropertiesController_update"];
        trace?: never;
    };
    "/api/webhooks/vendor-intake/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["VendorInboundWebhookIntakeController_intake"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspace-domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceDomainsController_list"];
        put?: never;
        post: operations["WorkspaceDomainsController_claim"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspace-domains/{id}/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkspaceDomainsController_check"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspace-domains/{id}/manual-verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkspaceDomainsController_manualVerify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspace-domains/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["WorkspaceDomainsController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_findOne"];
        put?: never;
        post?: never;
        delete: operations["OrganizationsController_remove"];
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_update"];
        trace?: never;
    };
    "/api/organizations/{id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listMembers"];
        put?: never;
        post: operations["OrganizationsController_addMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/members/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["OrganizationsController_removeMember"];
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_updateMemberRole"];
        trace?: never;
    };
    "/api/organizations/{id}/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listWorkspaces"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/workspaces/{workspaceId}/members/{identityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["OrganizationsController_grantWorkspaceMember"];
        post?: never;
        delete: operations["OrganizationsController_revokeWorkspaceMember"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/ai-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listAiKeys"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/ai-keys/{provider}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["OrganizationsController_upsertAiKey"];
        post?: never;
        delete: operations["OrganizationsController_removeAiKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/ai-keys/{provider}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OrganizationsController_testAiKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}/ai-usage-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_aiUsageSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/register/slug-available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RegistrationController_slugAvailable"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RegistrationController_register"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/register/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RegistrationController_confirm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List workspaces
         * @description Supports `search` (matches name/slug, case-insensitive), `sortBy` (name|slug|status|createdAt, default createdAt), `sortDir` (asc|desc, default desc), and `limit`/`offset` for pagination — a platform running thousands of workspaces should page and search rather than fetch every row.
         */
        get: operations["WorkspacesController_findAll"];
        put?: never;
        post: operations["WorkspacesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/self-serve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a workspace attached to an organization (self-serve)
         * @description Any authenticated identity. Exactly one of organizationId (existing org, gate-checked via OrganizationsService.assertCanCreateWorkspace) or newOrganizationName (provisions a brand-new org, unrestricted) must be set.
         */
        post: operations["WorkspacesController_createSelfServe"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/usage-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getUsageSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/platform-stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getPlatformStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/s3-usage-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getS3UsageSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Resolve a workspace by id or slug
         * @description `id` accepts either the workspace UUID or its slug (the short name from its URL, e.g. the `acme` in a `/w/acme` link) — use this first to turn a slug you were given into the UUID every other tool expects for a `workspaceId`/`projectId`-shaped parameter.
         */
        get: operations["WorkspacesController_findOne"];
        put?: never;
        post?: never;
        /**
         * Request permanent deletion of a workspace
         * @description Suspends the workspace immediately (closing off all data-plane access, same as POST :id/suspend) and schedules WorkspaceDeprovisionRunnerService to drop its Postgres schema, tear down its file storage and revoke its API keys after a grace period — not immediate, and reversible via POST :id/unsuspend until the grace period elapses. `confirmSlug` must equal the workspace's own slug; `exportOffered` must be `true`, attesting the caller offered the admin a full workspace export (see the export-jobs endpoints) before requesting this.
         */
        delete: operations["WorkspacesController_requestDeletion"];
        options?: never;
        head?: never;
        patch: operations["WorkspacesController_update"];
        trace?: never;
    };
    "/api/workspaces/{id}/suspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Suspend a workspace
         * @description Platform-admin-only. Refuses all data-plane requests against this workspace with a clear suspended message until unsuspended; members and data are untouched. Optional `reason` in the body is recorded on the audit log entry.
         */
        post: operations["WorkspacesController_suspend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{id}/unsuspend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unsuspend a workspace
         * @description Also cancels a pending deletion request (DELETE :id) still within its grace period.
         */
        post: operations["WorkspacesController_unsuspend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{id}/move-organization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Move a workspace to a different organization
         * @description Platform-admin-only. Drops the workspace's WorkspaceSsoBinding if the target organization doesn't own the currently-bound SsoConnection.
         */
        post: operations["WorkspacesController_moveOrganization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{id}/appearance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["WorkspacesController_updateAppearance"];
        trace?: never;
    };
    "/api/workspaces/{id}/theme": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getTheme"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["WorkspacesController_updateTheme"];
        trace?: never;
    };
    "/api/workspaces/{id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{id}/s3-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspacesController_getS3Usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/theme/catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** The font catalog theme layers' fontHeading/fontBody validate against — same list the picker and an agent choosing a font both read from. */
        get: operations["ThemeController_getCatalog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/provision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Provision this workspace’s Agents / Agent Log / Agent Log Cycles system tables
         * @description Idempotent — safe to call on every `crew` provisioning pass. Creates the three tables on first call; a later call is a no-op (returns the existing tables) rather than resetting anything an admin has since edited.
         */
        post: operations["AgentsController_provision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List this workspace’s agent personas
         * @description {id, name} only, for `crew`’s own persona-id lookup — not the prompt text, which crew reads through the normal records API once it has the id.
         */
        get: operations["AgentsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Append one Agent Log row for a Crew task run
         * @description The only way a row is ever created in Agent Log (see isAgentLogSeriesModel in RecordsService, which blocks it through the normal records API) — Crew calls this once per run, the same bearer-key identity it already authenticates with for provision/list.
         */
        post: operations["AgentsController_appendLogEntry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List this workspace’s headless agent runs (workflow/button-triggered)
         * @description AgentRunLog rows — the audit trail for START_AGENT_RUN workflow actions and RUN_AGENT_IN_BACKGROUND button clicks (ISSUE-859). Newest first, `limit`/`offset` paginated (default 50, max 200). Excludes the full transcript — see GET .../runs/:id for one row’s full detail. `personaId` optionally scopes to runs that used that Agents row (ISSUE-872).
         */
        get: operations["AgentsController_listRunLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/runs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** One headless agent run’s full detail, including its transcript */
        get: operations["AgentsController_getRunLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/log/{agentLogId}/cycles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Append one Agent Log Cycles row for a run iteration
         * @description The only way a row is ever created in Agent Log Cycles — same reasoning as appendLogEntry. `agentLogId` is the id returned by POST .../agents/log.
         */
        post: operations["AgentsController_appendLogCycle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/{agentId}/api-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List this agent's API keys */
        get: operations["AgentApiKeysController_list"];
        put?: never;
        /**
         * Mint a new API key for this agent
         * @description Provisions the synthetic identity backing this agent the first time it is called for a given agent, then mints a key against it — the raw key is returned once, here, and never stored or recoverable again.
         */
        post: operations["AgentApiKeysController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agents/{agentId}/api-keys/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Revoke one of this agent's API keys */
        delete: operations["AgentApiKeysController_revoke"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agent-skills/provision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Provision (or reconcile) this workspace’s Agent Skills system table
         * @description Idempotent — creates the table on first call; a later call only adds any columns a newer release has introduced since, never resetting existing rows.
         */
        post: operations["AgentSkillsController_provision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agent-skills/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get one Agent Skill by name, including its full Prompt body
         * @description Looks up an Agent Skills row by its unique `Name`, not its record id — the lookup the chat agent needs after seeing a skill named in the menu injected into its system prompt (AgentChatService.buildSystemPrompt). Throws a plain 404 for an unresolved or deleted name.
         */
        get: operations["AgentSkillsController_getSkill"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a workspace's projects
         * @description Projects are the folder a table (data model) lives in — pass this workspace's id (see workspaces_controller_find_one) to list them, then use a project's id as the `projectId` on data-model/view creation calls. Tables can also be created directly at workspace level (no project), so an empty result here doesn't mean the workspace has no tables.
         */
        get: operations["ProjectsController_findAll"];
        put?: never;
        post: operations["ProjectsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_findOne"];
        put?: never;
        post?: never;
        delete: operations["ProjectsController_remove"];
        options?: never;
        head?: never;
        patch: operations["ProjectsController_update"];
        trace?: never;
    };
    "/api/projects/{id}/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_getCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/theme": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_getTheme"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ProjectsController_updateTheme"];
        trace?: never;
    };
    "/api/projects/{id}/template-protection-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_getTemplateProtectionSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/detach-from-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProjectsController_detachFromTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/uninstall-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_uninstallPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/uninstall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProjectsController_uninstall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/template-update-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProjectsController_templateUpdatePreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{id}/template-update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProjectsController_templateUpdate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_liveUpdates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_findAll"];
        put?: never;
        post: operations["ViewsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_findOne"];
        put?: never;
        post?: never;
        delete: operations["ViewsController_remove"];
        options?: never;
        head?: never;
        patch: operations["ViewsController_update"];
        trace?: never;
    };
    "/api/views/{id}/theme": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_getTheme"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_updateTheme"];
        trace?: never;
    };
    "/api/views/{id}/move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_move"];
        trace?: never;
    };
    "/api/views/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_setPublished"];
        trace?: never;
    };
    "/api/views/{id}/access-policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_setAccessPolicy"];
        trace?: never;
    };
    "/api/views/{id}/public-slug": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ViewsController_setPublicSlug"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ViewsController_addPage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/pages/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_reorderPages"];
        trace?: never;
    };
    "/api/views/{id}/pages/{pageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ViewsController_removePage"];
        options?: never;
        head?: never;
        patch: operations["ViewsController_updatePage"];
        trace?: never;
    };
    "/api/views/{id}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_getDraft"];
        put: operations["ViewsController_upsertDraft"];
        post?: never;
        delete: operations["ViewsController_discardDraft"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/draft/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ViewsController_submitDraft"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/components": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ViewsController_addComponent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/components/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_reorderComponents"];
        trace?: never;
    };
    "/api/views/{id}/components/{componentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ViewsController_removeComponent"];
        options?: never;
        head?: never;
        patch: operations["ViewsController_updateComponent"];
        trace?: never;
    };
    "/api/views/{id}/components/{componentId}/theme": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ViewsController_getComponentTheme"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ViewsController_updateComponentTheme"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/data-model-export-import/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export a workspace's metadata as a portable manifest
         * @description Tables, fields, formula fields, keys, relationships, custom field types, views, and workflows. Every entity keeps its source id, used to match entities on import. Record data is excluded by default; `sampleRecords` (URL-encoded JSON array of `{dataModelId, cap?}`) opts specific tables into exporting curated sample rows — see docs/WORKSPACE_TEMPLATES_PLAN.md. CALL_VENDOR_API parameter values the catalog marks sensitive (e.g. a Pushover user key typed into a workflow) are redacted by default (ISSUE-172); `includeSensitiveValues=true` opts back in for a plain schema export, but is ignored for a `template` export, which always redacts. `contract` (URL-encoded JSON) embeds a field/value-order/status-semantics mapping for an external client (e.g. the crew CLI) to operate this table generically — see ContractManifestEntry; inert on the server, never interpreted.
         */
        get: operations["DataModelExportImportController_export"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/data-model-export-import/import/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Diff a schema manifest against this workspace without writing anything
         * @description Classifies every entity in the manifest as a create, an update (uuid-matched to an existing entity), or a conflict (a naming collision requiring user resolution). Nothing in the target workspace is deleted regardless of what the manifest omits.
         */
        post: operations["DataModelExportImportController_preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/data-model-export-import/import/apply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Write a schema manifest into this workspace
         * @description Creates new tables/fields/field types/relationships and updates entities matched by id to converge on the manifest. Never deletes anything absent from the manifest. Fails with 400 if the manifest has any unresolved naming conflict (see the preview endpoint) — conflict resolution is not yet supported.
         */
        post: operations["DataModelExportImportController_apply"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/formula-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FormulaFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/formula-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["FormulaFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["FormulaFieldsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RelationshipsController_findAll"];
        put?: never;
        /**
         * Create a relationship between two tables
         * @description Creates a reference relationship from this table to another, adding the FK/join field(s) needed on both sides. dataModelId in the path is the "from" table; the target table is given in the request body.
         */
        post: operations["RelationshipsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkflowsController_findAll"];
        put?: never;
        post: operations["WorkflowsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkflowsController_findOne"];
        put?: never;
        post?: never;
        delete: operations["WorkflowsController_remove"];
        options?: never;
        head?: never;
        patch: operations["WorkflowsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows/{id}/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkflowsController_listRuns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows/{id}/run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkflowsController_forceRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows/{id}/test-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkflowsController_testRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/workflows/{id}/test-runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["WorkflowsController_clearTestRuns"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TableSyncController_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["TableSyncController_setEnabled"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/google-sheets/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GoogleSheetsController_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/google-sheets/connect/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GoogleSheetsController_connectStart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/google-sheets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["GoogleSheetsController_disconnect"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/google-sheets/oauth/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GoogleSheetsController_callback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/google-sheets/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["GoogleSheetsController_preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/record-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordLinksController_list"];
        put?: never;
        post: operations["RecordLinksController_mint"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/record-links/{linkId}/regenerate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecordLinksController_regenerate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/views/{id}/record-links/{linkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["RecordLinksController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/record-link-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordLinkFieldsController_findAll"];
        put?: never;
        post: operations["RecordLinkFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/record-link-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["RecordLinkFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["RecordLinkFieldsController_update"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/ai-config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceAiConfigController_get"];
        /**
         * Configure or clear this workspace's own AI provider keys
         * @description Each provider key is independent. Omit `anthropicApiKey`/`openAiApiKey`/`googleApiKey` to leave the currently-stored key (if any) unchanged; set `clearAnthropicApiKey`/`clearOpenAiApiKey`/`clearGoogleApiKey` to remove it. A newly-provided key is saved and immediately live-tested, same as the organization tier. Clearing (or never setting) an Anthropic key falls back to the platform-wide ANTHROPIC_API_KEY env var when one is configured; there is no such fallback for OpenAI or Google.
         */
        put: operations["WorkspaceAiConfigController_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/ai-config/{provider}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkspaceAiConfigController_testAiKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/ai-config/usage-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceAiConfigController_usageSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/api-vendors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiVendorCatalogController_listVendors"];
        put?: never;
        post: operations["ApiVendorCatalogController_createVendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/api-vendors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ApiVendorCatalogController_removeVendor"];
        options?: never;
        head?: never;
        patch: operations["ApiVendorCatalogController_updateVendor"];
        trace?: never;
    };
    "/api/api-vendors/{id}/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ApiVendorCatalogController_createRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/api-vendors/{id}/requests/{requestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ApiVendorCatalogController_removeRequest"];
        options?: never;
        head?: never;
        patch: operations["ApiVendorCatalogController_updateRequest"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/vendor-apis": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceApiConnectionsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/vendor-apis/{vendorId}/connect/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceApiConnectionsController_connectStart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/vendor-apis/{vendorId}/connection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["WorkspaceApiConnectionsController_disconnect"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/vendor-apis/{vendorId}/api-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["WorkspaceApiConnectionsController_setApiKey"];
        post?: never;
        delete: operations["WorkspaceApiConnectionsController_clearApiKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/vendor-apis/{vendorId}/basic-auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["WorkspaceApiConnectionsController_setBasicAuth"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vendor-apis/oauth/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceApiConnectionsController_callback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agent/availability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Whether this caller can use the agent in this workspace
         * @description Checked before offering the agent — the panel is mounted on every workspace screen, so a workspace with no Anthropic key configured (or a role the workspace admin has turned the agent off for) should get no launcher at all rather than one that fails on the first message. Returns no key material.
         */
        get: operations["AgentChatController_availability"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/agent/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a message to the in-app agent
         * @description Stateless: send the full conversation transcript each turn. The agent may call Tablation API tools (same catalog as the MCP server) scoped to the caller's own permissions; destructive (delete) tools are withheld unless the caller is a platform admin.
         */
        post: operations["AgentChatController_chat"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NotificationsController_list"];
        put?: never;
        post?: never;
        delete: operations["NotificationsController_clearAll"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/notifications/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NotificationsController_liveUpdates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/notifications/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["NotificationsController_markRead"];
        trace?: never;
    };
    "/api/me/notifications/sources/{sourceId}/mute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["NotificationsController_muteSource"];
        delete: operations["NotificationsController_unmuteSource"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PreferencesController_get"];
        put: operations["PreferencesController_update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/preferences/favorite-grid-views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PreferencesController_getFavoriteGridViews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/preferences/favorite-views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PreferencesController_getFavoriteViews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/push/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get this install's Web Push configuration
         * @description `enabled: false` (and a null `vapidPublicKey`) when the deploy has no VAPID key pair set — the client should hide any "enable notifications" affordance in that case.
         */
        get: operations["PushController_getConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/push/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List the calling identity's subscribed devices
         * @description Never returns the endpoint or keys of a subscription, only an id and a display label.
         */
        get: operations["PushController_list"];
        put?: never;
        /**
         * Subscribe (or re-subscribe) this device to Web Push
         * @description Upserts by `endpoint` — re-subscribing the same endpoint re-points it at the calling identity, so a shared device signed in as someone else stops delivering the previous person's notifications.
         */
        post: operations["PushController_subscribe"];
        /**
         * Unsubscribe this device by the endpoint it already knows
         * @description For a device unsubscribing itself (e.g. on logout, or the user disabling push in-app) without first looking up its own row id. 403s if the endpoint belongs to a different identity; a no-op if the endpoint is not subscribed at all.
         */
        delete: operations["PushController_unsubscribe"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me/push/subscriptions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Revoke one of the calling identity's own subscriptions by id
         * @description For the device-management list (ids come from GET .../subscriptions). 403s if the id belongs to a different identity. See DELETE .../subscriptions for the device's own unsubscribe-itself path.
         */
        delete: operations["PushController_revoke"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/button-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ButtonFieldsController_findAll"];
        put?: never;
        post: operations["ButtonFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/button-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ButtonFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["ButtonFieldsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/button-fields/{id}/agent-chat-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ButtonFieldsController_resolveAgentChatMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/button-fields/{id}/run-agent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ButtonFieldsController_runAgent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/button-fields/{id}/run-script": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ButtonFieldsController_runScript"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/lookup-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["LookupFieldsController_findAll"];
        put?: never;
        post: operations["LookupFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/lookup-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["LookupFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["LookupFieldsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/incoming-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RollupFieldsController_findIncomingReferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/rollup-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RollupFieldsController_findAll"];
        put?: never;
        post: operations["RollupFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/rollup-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["RollupFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["RollupFieldsController_update"];
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/formulas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceFormulasController_findAll"];
        put?: never;
        post: operations["WorkspaceFormulasController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/formulas/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WorkspaceFormulasController_test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/formulas/{id}/dependents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WorkspaceFormulasController_findDependents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/formulas/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["WorkspaceFormulasController_remove"];
        options?: never;
        head?: never;
        patch: operations["WorkspaceFormulasController_update"];
        trace?: never;
    };
    "/api/sso-connections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SsoConnectionsController_listConnections"];
        put?: never;
        post: operations["SsoConnectionsController_createConnection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sso-connections/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SsoConnectionsController_getConnection"];
        put?: never;
        post?: never;
        delete: operations["SsoConnectionsController_removeConnection"];
        options?: never;
        head?: never;
        patch: operations["SsoConnectionsController_updateConnection"];
        trace?: never;
    };
    "/api/sso-connections/{id}/bindings/{workspaceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["SsoConnectionsController_upsertBinding"];
        post?: never;
        delete: operations["SsoConnectionsController_removeBinding"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sso-connections/{id}/group-mappings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SsoConnectionsController_createGroupMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sso-connections/{id}/group-mappings/{mappingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["SsoConnectionsController_removeGroupMapping"];
        options?: never;
        head?: never;
        patch: operations["SsoConnectionsController_updateGroupMapping"];
        trace?: never;
    };
    "/api/internal/relay/ships/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RelayInternalController_resolve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/internal/relay/ships/{workspaceId}/{shipId}/connected": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RelayInternalController_markConnected"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/internal/relay/ships/{workspaceId}/{shipId}/disconnected": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RelayInternalController_markDisconnected"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/grid-views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SavedGridViewsController_list"];
        put?: never;
        post: operations["SavedGridViewsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/grid-views/{id}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SavedGridViewsController_duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/grid-views/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["SavedGridViewsController_remove"];
        options?: never;
        head?: never;
        patch: operations["SavedGridViewsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/grid-views/{gridViewId}/visualizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SavedChartVisualizationsController_list"];
        put?: never;
        post: operations["SavedChartVisualizationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/grid-views/{gridViewId}/visualizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["SavedChartVisualizationsController_remove"];
        options?: never;
        head?: never;
        patch: operations["SavedChartVisualizationsController_update"];
        trace?: never;
    };
    "/api/data-models/{dataModelId}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ExportController_export"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/import/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ImportController_preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ImportController_listForModel"];
        put?: never;
        post: operations["ImportController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/import/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ImportController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/export-jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Request a new full-workspace export
         * @description Creates a PENDING WorkspaceExportJob; WorkspaceExportRunnerService picks it up in the background and builds a zip containing the schema manifest, every table as CSV and JSON, and the workspace's own files. Poll GET .../latest for status.
         */
        post: operations["WorkspaceExportJobController_request"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/export-jobs/latest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** The workspace's most recently requested export job, if any */
        get: operations["WorkspaceExportJobController_latest"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/export-jobs/{id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Download a READY export archive
         * @description Authenticated (same session/role gate as every other route here) and time-limited — refuses once past the job's expiresAt, same posture a short-TTL signed URL would give, without handing out a bare link that works for anyone who has it. Records the archive's first download on the job row (downloadedAt) so a platform admin can tell "exported but never downloaded" apart from "downloaded".
         */
        get: operations["WorkspaceExportJobController_download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewsController_getView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewsController_liveUpdates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/field-access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_fieldAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_list"];
        put?: never;
        post: operations["PublicViewDataController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PublicViewDataController_query"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_aggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/group-aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_groupAggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/path-children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_pathChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/my-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_myRecord"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/data-models/{dataModelId}/records/{recordId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDataController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["PublicViewDataController_update"];
        trace?: never;
    };
    "/api/public/views/{publicSlug}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewDraftsController_getDraft"];
        put: operations["PublicViewDraftsController_upsertDraft"];
        post?: never;
        delete: operations["PublicViewDraftsController_discardDraft"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/draft/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PublicViewDraftsController_submitDraft"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a file from a published view (e.g. a FORM photo field)
         * @description Same response shape as the authenticated upload route: {storageKey, originalName, mimeType, size, width?, height?, gps?, capturedAt?}. Pass fieldTypeId (also multipart) to validate before the file is stored — see FilesController's identical parameter.
         */
        post: operations["PublicViewFilesController_upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/files/{uuid}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicViewFilesController_download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkController_getView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkController_liveUpdates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records/field-access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkDataController_fieldAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkDataController_list"];
        put?: never;
        post: operations["PublicRecordLinkDataController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PublicRecordLinkDataController_query"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records/aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkDataController_aggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records/group-aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkDataController_groupAggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/data-models/{dataModelId}/records/{recordId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkDataController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a file from a record-link page (e.g. a comment reply screenshot field)
         * @description Same response shape as the authenticated upload route: {storageKey, originalName, mimeType, size, width?, height?, gps?, capturedAt?}. Pass fieldTypeId (also multipart) to validate before the file is stored — see FilesController's identical parameter.
         */
        post: operations["PublicRecordLinkFilesController_upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/r/{token}/files/{uuid}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicRecordLinkFilesController_download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/responder-access/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PublicResponderAccessController_request"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/responder-access/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicResponderAccessController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/pending-creations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PublicPendingCreationController_request"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/views/{publicSlug}/pending-creations/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PublicPendingCreationController_verify"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/auth/google/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ResponderGoogleOAuthController_start"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/public/auth/google/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ResponderGoogleOAuthController_callback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/library-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Browse published library templates
         * @description Pass workspaceId to also include templates restricted to that workspace's Organization (ISSUE-713) — omitted, only platform-wide templates come back.
         */
        get: operations["LibraryController_findAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/library-templates/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish a project as a new library template
         * @description Snapshots the project's tables, views, theme, and workflow automations. Fails with 400 if the project isn't self-contained — a relationship, reference field, or workflow action pointing at a table outside it.
         */
        post: operations["LibraryController_publish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/library-templates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a single library template, including its manifest
         * @description Pass workspaceId to resolve an org-scoped template (ISSUE-713) — omitted, or from a workspace outside the template's Organization, resolves only platform-wide templates and 403s otherwise.
         */
        get: operations["LibraryController_findOne"];
        put?: never;
        post?: never;
        /** Unpublish a library template (source workspace only) */
        delete: operations["LibraryController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/library-templates/{id}/install-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Diff a template against a workspace without installing it
         * @description Same diff shape the manual data-model-export-import preview endpoint returns — surfaces naming conflicts before install commits to anything.
         */
        get: operations["LibraryController_installPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/library-templates/{id}/install": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Install a template into a new project in a workspace
         * @description Creates a new Project and copies in the template’s tables and views. Fails with 400 if any table/field-type name in the template already exists in the target workspace — call install-preview first to check.
         */
        post: operations["LibraryController_install"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SlackController_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack/validate-table": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SlackController_validateTable"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack/connect/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SlackController_connectStart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack/target-tables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["SlackController_replaceTargetTables"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["SlackController_disconnect"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/slack/pending-install": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SlackController_pendingInstall"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/workspaces/{workspaceId}/slack/install/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SlackController_completeInstall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/slack/oauth/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SlackController_callback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/slack/commands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SlackController_command"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/slack/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SlackController_interactions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/slack/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SlackController_events"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/table-creation/infer-from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TableCreationController_inferFromUrl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/table-creation/infer-from-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TableCreationController_inferFromFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/table-creation/from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TableCreationController_fromUrl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/table-creation/from-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TableCreationController_fromFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        BootstrapAdminDto: {
            /** Format: email */
            email: string;
            password: string;
        };
        BootstrapAdminResponseDto: {
            id: string;
            email: string;
            /** @enum {string} */
            role: "PLATFORM_ADMIN" | "WORKSPACE_ADMIN" | "WORKSPACE_USER";
        };
        LoginDto: {
            /** Format: email */
            email: string;
            password: string;
            workspaceSlug?: string;
        };
        AuthenticatedUserResponseDto: {
            id: string;
            identityId: string;
            workspaceId?: string | null;
            email: string;
            name?: string | null;
            avatarStorageKey?: string | null;
            /** @enum {string} */
            role: "PLATFORM_ADMIN" | "WORKSPACE_ADMIN" | "WORKSPACE_USER";
        };
        LogoutResponseDto: {
            ok: boolean;
        };
        UpdateNameDto: {
            workspaceId: string;
            name?: string | null;
        };
        UpdateAvatarDto: {
            workspaceId: string;
            storageKey?: string | null;
        };
        AccessibleWorkspaceDto: {
            workspaceId: string;
            slug: string;
            name: string;
            color?: string | null;
            icon?: string | null;
            /** @enum {string} */
            role: "PLATFORM_ADMIN" | "WORKSPACE_ADMIN" | "WORKSPACE_USER";
            pinned: boolean;
            /** Format: date-time */
            lastAccessedAt?: string | null;
        };
        MyWorkspacesResponseDto: {
            workspaces: components["schemas"]["AccessibleWorkspaceDto"][];
            totalCount: number;
        };
        SwitchWorkspaceDto: {
            /** Format: uuid */
            workspaceId: string;
        };
        SwitchWorkspaceResponseDto: {
            workspaceSlug: string;
        };
        CreateInviteDto: {
            /** Format: email */
            email: string;
            /** @enum {string} */
            role?: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
            /** Format: uuid */
            workspaceId?: string;
        };
        CreateInviteResponseDto: {
            userId: string;
            inviteToken: string;
            /** Format: date-time */
            expiresAt: string;
        };
        AcceptInviteDto: {
            token: string;
            password?: string;
        };
        ForgotPasswordDto: {
            /** Format: email */
            email: string;
        };
        ResetPasswordDto: {
            token: string;
            password: string;
        };
        MagicLinkRequestDto: {
            /** Format: email */
            email: string;
            workspaceSlug: string;
        };
        MagicLinkConsumeDto: {
            token: string;
        };
        ChangePasswordDto: {
            currentPassword: string;
            newPassword: string;
        };
        UpdateUserDto: {
            name?: string | null;
            /** @enum {string} */
            role?: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
        };
        ApiKeyResponseDto: {
            id: string;
            name: string;
            keyPrefix: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            lastUsedAt?: string | null;
            /** Format: date-time */
            revokedAt?: string | null;
        };
        CreateApiKeyDto: {
            name: string;
        };
        ApiKeyCreatedResponseDto: {
            id: string;
            name: string;
            keyPrefix: string;
            /** Format: date-time */
            createdAt: string;
            key: string;
        };
        DeviceAuthorizeDto: {
            deviceName?: string;
        };
        DeviceAuthorizeResponseDto: {
            deviceCode: string;
            userCode: string;
            verificationUri: string;
            verificationUriComplete: string;
            expiresIn: number;
            interval: number;
        };
        DeviceInfoResponseDto: {
            deviceName?: string | null;
            /** Format: date-time */
            expiresAt: string;
        };
        DeviceConfirmDto: {
            userCode: string;
            approve: boolean;
            workspaceId?: string;
        };
        DeviceTokenDto: {
            deviceCode: string;
        };
        DeviceTokenApiKeyDto: {
            id: string;
            name: string;
            keyPrefix: string;
            key: string;
            /** Format: date-time */
            createdAt: string;
        };
        DeviceTokenWorkspaceDto: {
            id: string;
            slug: string;
            name: string;
        };
        DeviceTokenIdentityDto: {
            id: string;
            name?: string | null;
            email: string;
        };
        DeviceTokenResponseDto: {
            apiKey: components["schemas"]["DeviceTokenApiKeyDto"];
            workspace: components["schemas"]["DeviceTokenWorkspaceDto"];
            identity: components["schemas"]["DeviceTokenIdentityDto"];
        };
        CreateRoleDto: {
            name: string;
            description?: string;
            /** @enum {string} */
            defaultAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** @enum {string} */
            defaultViewAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** Format: uuid */
            projectId?: string;
            isDefault?: boolean;
        };
        UpdateRoleDto: {
            name?: string;
            description?: string;
            /** @enum {string} */
            defaultAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** @enum {string} */
            defaultViewAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** Format: uuid */
            projectId?: string | null;
            isDefault?: boolean;
        };
        SetModelGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetFieldGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetButtonFieldGrantDto: {
            /** @enum {string} */
            access: "NONE" | "EXECUTE";
        };
        SetViewGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetGridViewGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetCapabilityDto: {
            granted: boolean;
        };
        AssignProjectRoleDto: {
            /** Format: uuid */
            userId: string;
            /** Format: uuid */
            roleId: string;
        };
        CreateOrganizationGroupDto: {
            name: string;
            description?: string;
        };
        UpdateOrganizationGroupDto: {
            name?: string;
            description?: string;
        };
        AddGroupMemberDto: {
            /** Format: uuid */
            userId: string;
        };
        AssignGroupProjectRoleDto: {
            /** Format: uuid */
            roleId: string;
        };
        AssignGroupWorkspaceRoleDto: {
            /** @enum {string} */
            role: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
        };
        CropOperationDto: {
            /**
             * @default crop
             * @enum {string}
             */
            op: "crop";
            /** @description Left edge of the crop rectangle, in pixels from the origin of the image as it stands after any preceding operation in the array. */
            x: number;
            /** @description Top edge of the crop rectangle, in pixels from the origin of the image as it stands after any preceding operation in the array. */
            y: number;
            /** @description Width of the crop rectangle, in pixels. */
            width: number;
            /** @description Height of the crop rectangle, in pixels. */
            height: number;
        };
        RotateOperationDto: {
            /**
             * @default rotate
             * @enum {string}
             */
            op: "rotate";
            /**
             * @description Clockwise rotation in degrees, 90° steps only.
             * @enum {number}
             */
            degrees: 90 | 180 | 270 | -90;
        };
        FlipOperationDto: {
            /**
             * @default flip
             * @enum {string}
             */
            op: "flip";
            /**
             * @description horizontal mirrors left-right (sharp flop); vertical mirrors top-bottom (sharp flip).
             * @enum {string}
             */
            direction: "horizontal" | "vertical";
        };
        ResizeOperationDto: {
            /**
             * @default resize
             * @enum {string}
             */
            op: "resize";
            /** @description Target width in pixels. */
            width: number;
            /** @description Target height in pixels. */
            height: number;
        };
        FilterOperationDto: {
            /**
             * @default filter
             * @enum {string}
             */
            op: "filter";
            /**
             * @description Which Photon filter to apply. brightness/contrast/blur and the IMAGE_ADJUSTMENT_NAMES entries read `amount`; the toggle filters (sharpen/grayscale/sepia/invert), the IMAGE_LOOK_NAMES and the IMAGE_EFFECT_NAMES ignore it.
             * @enum {string}
             */
            name: "brightness" | "contrast" | "blur" | "sharpen" | "grayscale" | "sepia" | "invert" | "oceanic" | "islands" | "marine" | "liquid" | "radio" | "mauve" | "bluechrome" | "vintage" | "perfume" | "golden" | "pastel_pink" | "firenze" | "obsidian" | "lofi" | "dramatic" | "cali" | "lix" | "neue" | "ryo" | "primary" | "colorize" | "solarize" | "emboss" | "edge_detection" | "frosted_glass" | "halftone" | "noise_reduction" | "normalize" | "laplace" | "sobel_global" | "grayscale_human_corrected" | "decompose_max" | "decompose_min" | "hue_rotate" | "saturate" | "desaturate" | "lighten" | "darken" | "threshold" | "pixelize" | "dither" | "posterize" | "horizontal_strips" | "vertical_strips";
            /** @description brightness: -255..255 (added to each pixel). contrast: -255..255 (factor; Photon clamps the result if out of range). blur: gaussian radius in pixels, 1..50. hue_rotate: 0..360 degrees. threshold: 0..255. saturate/desaturate/lighten/darken/pixelize/dither/posterize/horizontal_strips/vertical_strips: 0..100, scaled to whatever range the underlying Photon call expects. Ignored for the toggle filters and the looks/effects. */
            amount?: number;
        };
        RedactOperationDto: {
            /**
             * @default redact
             * @enum {string}
             */
            op: "redact";
            /** @description Left edge of the rectangle to redact, in pixels from the origin of the image as it stands after any preceding operation in the array. */
            x: number;
            /** @description Top edge of the rectangle to redact, in pixels from the origin of the image as it stands after any preceding operation in the array. */
            y: number;
            /** @description Width of the rectangle to redact, in pixels. */
            width: number;
            /** @description Height of the rectangle to redact, in pixels. */
            height: number;
            /**
             * @description pixelate (default) hard-downscales the region so the source detail is genuinely discarded; blur applies a gaussian blur, which can be reversed to a surprising degree on text.
             * @enum {string}
             */
            mode?: "pixelate" | "blur";
            /** @description pixelate: block-size divisor, larger is coarser (default 12). blur: gaussian sigma in pixels (default 12). */
            amount?: number;
        };
        CreateImageTransformDto: {
            /** @description Ordered pipeline applied to the source image in array order (typically rotate, then crop, then resize, then any filters) and materialized once into a single new stored file. */
            operations: (components["schemas"]["CropOperationDto"] | components["schemas"]["RotateOperationDto"] | components["schemas"]["FlipOperationDto"] | components["schemas"]["ResizeOperationDto"] | components["schemas"]["FilterOperationDto"] | components["schemas"]["RedactOperationDto"])[];
            /**
             * Format: uuid
             * @description Id of the target field's FieldTypeDefinition. When given, the transform result is validated against that type's allowedFileTypes/maxFileSizeBytes/dimension/aspect-ratio rules before being returned — the same rules the record-save path enforces anyway, just checked here too so a violation is reported at transform time instead of only surfacing later on PATCH .../records/{id}.
             */
            fieldTypeId?: string;
            /**
             * Format: uuid
             * @description Media Library item id this transform is derived from (see ISSUE-049). Recorded as the new item's derivedFromId for copy-on-write lineage — the source object itself is never mutated, this transform always produces a new stored file/item. Also the field-agnostic way to route a transform into the Media Library: given without fieldTypeId (e.g. editing from the Media > All Files item drawer, where no particular field is in scope), it alone is enough to create a Media Library item instead of a plain stored file.
             */
            sourceMediaItemId?: string;
            /** @description ImageEditorDialog's Annotate-tab Konva shape-list document (ISSUE-392), an opaque JSON value the frontend alone interprets. Ignored unless this transform also targets the Media Library (see fieldTypeId/sourceMediaItemId) — persisted as the resulting item's edit_state so reopening it for editing restores movable/editable shapes instead of forcing a redraw from scratch. Pass null (or omit) to leave a result with no annotation document. */
            editState?: Record<string, never>;
        };
        FilterPreviewsDto: {
            /** @description Filter names to render a small preview of, in one batched request — typically every look/effect in the Looks tab's list, so the whole list gets its thumbnails from a single round trip. */
            names: ("brightness" | "contrast" | "blur" | "sharpen" | "grayscale" | "sepia" | "invert" | "oceanic" | "islands" | "marine" | "liquid" | "radio" | "mauve" | "bluechrome" | "vintage" | "perfume" | "golden" | "pastel_pink" | "firenze" | "obsidian" | "lofi" | "dramatic" | "cali" | "lix" | "neue" | "ryo" | "primary" | "colorize" | "solarize" | "emboss" | "edge_detection" | "frosted_glass" | "halftone" | "noise_reduction" | "normalize" | "laplace" | "sobel_global" | "grayscale_human_corrected" | "decompose_max" | "decompose_min" | "hue_rotate" | "saturate" | "desaturate" | "lighten" | "darken" | "threshold" | "pixelize" | "dither" | "posterize" | "horizontal_strips" | "vertical_strips")[];
        };
        WorkspaceStorageConfigResponseDto: {
            /** @enum {string} */
            mode: "SYSTEM_DEFAULT" | "CUSTOM";
            bucket: string | null;
            endpoint: string | null;
            region: string | null;
            accessKeyId: string | null;
            forcePathStyle: boolean;
            maxStorageMb: number | null;
        };
        UpsertWorkspaceStorageConfigDto: {
            /** @enum {string} */
            mode: "SYSTEM_DEFAULT" | "CUSTOM";
            bucket?: string;
            endpoint?: string;
            region?: string;
            accessKeyId?: string;
            secretAccessKey?: string;
            forcePathStyle?: boolean;
            maxStorageMb?: number | null;
        };
        CreateFieldTypePropertyDto: {
            name: string;
            label: string;
            /** Format: uuid */
            propertyTypeId: string;
            isRequired?: boolean;
        };
        CreateFieldTypeChoiceOptionDto: {
            /** Format: uuid */
            id?: string;
            value: string;
            label: string;
            color?: string;
            icon?: string;
            optionGroup?: string;
            isProtected?: boolean;
        };
        CreateFieldValidationRuleDto: {
            /** @enum {string} */
            kind: "NON_EMPTY" | "NUMERIC_RANGE" | "REGEX" | "STRING_LENGTH" | "DATE_RANGE";
            config?: {
                [key: string]: unknown;
            };
            message?: string;
        };
        CreateFieldTransformationRuleDto: {
            /** @enum {string} */
            kind: "TRIM" | "UPPERCASE" | "LOWERCASE" | "PROPER_CASE" | "REGEX_REPLACE";
            config?: {
                [key: string]: unknown;
            };
        };
        CreateFieldTypeDto: {
            name: string;
            description?: string;
            icon?: string;
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE" | "CHOICE" | "FORMULA" | "AUTO_NUMBER";
            /** @enum {string} */
            baseType?: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            properties?: components["schemas"]["CreateFieldTypePropertyDto"][];
            primaryPropertyCount?: number;
            /** Format: uuid */
            targetModelId?: string;
            /** @enum {string} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL";
            isMultiple?: boolean;
            options?: components["schemas"]["CreateFieldTypeChoiceOptionDto"][];
            allowAdditions?: boolean;
            autoNumberPrefix?: string;
            autoNumberZeroPadDigits?: number;
            /** Format: uuid */
            autoNumberPrefixSourceFieldId?: string;
            /** Format: uuid */
            autoNumberPrefixSourceColumnId?: string;
            /** @enum {string} */
            stringFormat?: "PLAIN" | "EMAIL" | "URL" | "ICON" | "PATH";
            maxLength?: number;
            /** @enum {string} */
            textFormat?: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
            /** @enum {string} */
            jsonFormat?: "PLAIN" | "FOCAL_POINT";
            decimalPlaces?: number;
            allowedFileTypes?: string[];
            maxFileSizeBytes?: number;
            minWidthPx?: number;
            maxWidthPx?: number;
            minHeightPx?: number;
            maxHeightPx?: number;
            aspectRatioW?: number;
            aspectRatioH?: number;
            validationRules?: components["schemas"]["CreateFieldValidationRuleDto"][];
            transformationRules?: components["schemas"]["CreateFieldTransformationRuleDto"][];
        };
        UpdateFieldTypePropertyDto: {
            /** Format: uuid */
            id?: string;
            name: string;
            label: string;
            /** Format: uuid */
            propertyTypeId: string;
            isRequired?: boolean;
        };
        UpdateFieldTypeDto: {
            name?: string;
            description?: string;
            icon?: string | null;
            properties?: components["schemas"]["UpdateFieldTypePropertyDto"][];
            primaryPropertyCount?: number | null;
            confirmStructuredPropertyChange?: boolean;
            options?: components["schemas"]["CreateFieldTypeChoiceOptionDto"][];
            allowAdditions?: boolean;
            confirmChoiceValueRemoval?: boolean;
            confirmChoiceValueRename?: boolean;
            validationRules?: components["schemas"]["CreateFieldValidationRuleDto"][];
            transformationRules?: components["schemas"]["CreateFieldTransformationRuleDto"][];
            /** @enum {string} */
            stringFormat?: "PLAIN" | "EMAIL" | "URL" | "ICON" | "PATH";
            /** @enum {string} */
            textFormat?: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
            /** @enum {string} */
            jsonFormat?: "PLAIN" | "FOCAL_POINT";
            decimalPlaces?: number | null;
            allowedFileTypes?: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
            aspectRatioW?: number | null;
            aspectRatioH?: number | null;
        };
        DeleteFieldTypeDto: {
            /** Format: uuid */
            targetFieldTypeId?: string;
            confirmLossyChange?: boolean;
        };
        PushFieldTypeTemplateDto: {
            workspaceIds: string[];
            confirmStructuredPropertyChange?: boolean;
            confirmChoiceValueRemoval?: boolean;
            confirmLossyChange?: boolean;
            /** Format: uuid */
            replaceFallbackFieldTypeId?: string;
        };
        MediaLibraryItemResponseDto: {
            id: string;
            storageKey: string;
            contentHash: string;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            originalName: string;
            uploadedById: string | null;
            sourceUrl: string | null;
            derivedFromId: string | null;
            createdAt: string;
            usageCount: number;
            orphaned: boolean;
        };
        MediaLibraryItemListResponseDto: {
            items: components["schemas"]["MediaLibraryItemResponseDto"][];
            total: number;
        };
        MediaLibraryItemUsageResponseDto: {
            modelId: string;
            modelName: string;
            fieldId: string;
            fieldName: string;
            recordId: string;
            propertyPath: string;
        };
        CreateDataFieldDto: {
            name: string;
            columnName?: string;
            description?: string;
            /** Format: uuid */
            fieldTypeId: string;
            isRequired?: boolean;
            isUnique?: boolean;
            defaultValue?: string;
            sourceHeader?: string;
            isProtected?: boolean;
            isReadOnly?: boolean;
            lockedReason?: string;
            applicableMimeTypePrefixes?: string[];
            templateSourceId?: string;
        };
        CreateDataModelDto: {
            /** Format: uuid */
            projectId?: string;
            /** Format: uuid */
            workspaceId?: string;
            name: string;
            recordLabelSingular?: string;
            recordLabelPlural?: string;
            tableName?: string;
            fields?: components["schemas"]["CreateDataFieldDto"][];
        };
        DataModelSummaryResponseDto: {
            id: string;
            workspaceId: string;
            projectId?: string | null;
            name: string;
            tableName: string;
            displayColumnName?: string | null;
            color?: string | null;
            icon?: string | null;
            versioningEnabled: boolean;
            autoPurgeDeletedRecords: boolean;
            retentionDays?: number | null;
            retentionColumn: string;
            isSystem: boolean;
            isExtensible: boolean;
            isProtected: boolean;
            recordLabelSingular: string;
            recordLabelPlural: string;
            createdById?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            defaultFormComponentId?: string | null;
            fields?: components["schemas"]["DataFieldResponseDto"][];
        };
        FieldTypeSummaryResponseDto: {
            id: string;
            workspaceId: string;
            name: string;
            description?: string | null;
            icon?: string | null;
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE" | "CHOICE" | "FORMULA" | "AUTO_NUMBER";
            /** @enum {string} */
            baseType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            isSystem: boolean;
            targetModelId?: string | null;
            targetModel?: {
                [key: string]: unknown;
            } | null;
            /** @enum {string|null} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL" | null;
            isMultiple: boolean;
            /** @enum {string} */
            stringFormat: "PLAIN" | "EMAIL" | "URL" | "ICON" | "PATH";
            /** @enum {string} */
            textFormat: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig: {
                [key: string]: unknown;
            };
            decimalPlaces?: number | null;
            formula?: string | null;
            allowedFileTypes: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
            aspectRatioW?: number | null;
            aspectRatioH?: number | null;
        };
        FieldTypePropertyResponseDto: {
            id: string;
            name: string;
            label: string;
            isRequired: boolean;
            position: number;
            propertyType: components["schemas"]["FieldTypeSummaryResponseDto"];
        };
        FieldTypeResponseDto: {
            id: string;
            workspaceId: string;
            name: string;
            description?: string | null;
            icon?: string | null;
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE" | "CHOICE" | "FORMULA" | "AUTO_NUMBER";
            /** @enum {string} */
            baseType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            isSystem: boolean;
            targetModelId?: string | null;
            targetModel?: ({
                [key: string]: unknown;
            } & components["schemas"]["DataModelSummaryResponseDto"]) | null;
            /** @enum {string|null} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL" | null;
            isMultiple: boolean;
            /** @enum {string} */
            stringFormat: "PLAIN" | "EMAIL" | "URL" | "ICON" | "PATH";
            /** @enum {string} */
            textFormat: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig: {
                [key: string]: unknown;
            };
            decimalPlaces?: number | null;
            formula?: string | null;
            allowedFileTypes: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
            aspectRatioW?: number | null;
            aspectRatioH?: number | null;
            properties?: components["schemas"]["FieldTypePropertyResponseDto"][];
        };
        DataFieldResponseDto: {
            id: string;
            dataModelId: string;
            fieldTypeId: string;
            name: string;
            description?: string | null;
            columnName: string;
            isRequired: boolean;
            isUnique: boolean;
            isProtected: boolean;
            isReadOnly: boolean;
            lockedReason?: string | null;
            applicableMimeTypePrefixes: string[];
            position: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            fieldType?: components["schemas"]["FieldTypeResponseDto"];
        };
        DataModelKeyFieldResponseDto: {
            id: string;
            keyId: string;
            fieldId: string;
            position: number;
            field: components["schemas"]["DataFieldResponseDto"];
        };
        DataModelKeyResponseDto: {
            id: string;
            dataModelId: string;
            name: string;
            /** Format: date-time */
            createdAt: string;
            keyFields: components["schemas"]["DataModelKeyFieldResponseDto"][];
        };
        RelationshipColumnResponseDto: {
            id: string;
            relationshipId: string;
            columnName: string;
            targetFieldId?: string | null;
            position: number;
        };
        RelationshipResponseDto: {
            id: string;
            name: string;
            sourceModelId: string;
            targetModelId: string;
            targetKeyId?: string | null;
            isRequired: boolean;
            /** @enum {string} */
            onDelete: "RESTRICT" | "CASCADE" | "SET_NULL";
            /** Format: date-time */
            createdAt: string;
            columns: components["schemas"]["RelationshipColumnResponseDto"][];
            targetModel: components["schemas"]["DataModelSummaryResponseDto"];
        };
        ViewComponentFilterResponseDto: {
            id: string;
            viewComponentId: string;
            position: number;
        };
        DefaultFormComponentResponseDto: {
            id: string;
            /** @enum {string} */
            type: "FORM" | "GRID" | "TREE" | "GRAPH" | "TEXT" | "KPI" | "CHART" | "KANBAN" | "GALLERY" | "MAP" | "CALENDAR" | "MEDIA" | "FEED";
            dataModelId: string;
            filters: components["schemas"]["ViewComponentFilterResponseDto"][];
            dataModel: components["schemas"]["DataModelSummaryResponseDto"];
        };
        DataModelResponseDto: {
            id: string;
            workspaceId: string;
            projectId?: string | null;
            name: string;
            tableName: string;
            displayColumnName?: string | null;
            color?: string | null;
            icon?: string | null;
            versioningEnabled: boolean;
            autoPurgeDeletedRecords: boolean;
            retentionDays?: number | null;
            retentionColumn: string;
            isSystem: boolean;
            isExtensible: boolean;
            isProtected: boolean;
            recordLabelSingular: string;
            recordLabelPlural: string;
            createdById?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            defaultFormComponentId?: string | null;
            /** @description Ordered ids of other models' REFERENCE DataFields that point at this model, curated to appear in RecordEditDrawer's "Related" section in this order. Empty means unconfigured — the client falls back to showing every reverse reference it can find via GET /data-models/{id}/reverse-references. */
            relatedSectionFieldIds: string[];
            /** @description The installed Library template's declared RecordEditDrawer default layout — columnName-keyed `{ columnName, width }[]`, or null if the template declared none (or predates this field). RecordEditDrawer resolves each columnName against this model's own `fields` at use time. */
            templateRecordEditLayout?: {
                [key: string]: unknown;
            }[] | null;
            fields: components["schemas"]["DataFieldResponseDto"][];
            keys?: components["schemas"]["DataModelKeyResponseDto"][];
            relationshipsFromHere?: components["schemas"]["RelationshipResponseDto"][];
            defaultFormComponent?: components["schemas"]["DefaultFormComponentResponseDto"] | null;
        };
        DataModelAccessResponseDto: {
            /** @enum {string} */
            access: "NONE" | "READ" | "WRITE" | "DELETE";
        };
        DataModelFieldAccessResponseDto: {
            /** @description Map of columnName -> effective AccessLevel for the current identity. */
            fields: {
                [key: string]: "NONE" | "READ" | "WRITE" | "DELETE";
            };
        };
        UpdateDataModelDto: {
            name?: string;
            tableName?: string;
            displayColumnName?: string | null;
            color?: string | null;
            icon?: string | null;
            versioningEnabled?: boolean;
            autoPurgeDeletedRecords?: boolean;
            retentionDays?: number | null;
            retentionColumn?: string;
            defaultFormComponentId?: string | null;
            recordLabelSingular?: string;
            recordLabelPlural?: string;
            relatedSectionFieldIds?: string[];
            isProtected?: boolean;
            templateRecordEditLayout?: Record<string, never>[] | null;
        };
        MoveDataModelDto: {
            /** Format: uuid */
            targetProjectId?: string | null;
        };
        MoveDataModelResponseDto: {
            model: components["schemas"]["DataModelResponseDto"];
            clearedGrantCount: number;
        };
        ReorderDataFieldsDto: {
            fieldIds: string[];
        };
        UpdateDataFieldDto: {
            name?: string;
            columnName?: string;
            description?: string;
            /** Format: uuid */
            fieldTypeId?: string;
            isRequired?: boolean;
            isUnique?: boolean;
            defaultValue?: string;
            confirmLossyChange?: boolean;
            isProtected?: boolean;
            applicableMimeTypePrefixes?: string[];
        };
        CreateDataModelKeyDto: {
            name: string;
            fieldIds: string[];
        };
        CreateRecordRuleDto: {
            name: string;
            condition: string;
            message: string;
            /** @enum {string} */
            appliesTo?: "CREATE" | "UPDATE" | "BOTH";
            fieldColumnName?: string;
            enabled?: boolean;
        };
        UpdateRecordRuleDto: {
            name?: string;
            condition?: string;
            message?: string;
            /** @enum {string} */
            appliesTo?: "CREATE" | "UPDATE" | "BOTH";
            fieldColumnName?: string | null;
            enabled?: boolean;
        };
        ReorderRecordRulesDto: {
            ruleIds: string[];
        };
        CreateTableWebhookDto: {
            name: string;
            restrictFields?: boolean;
            allowedFieldColumnNames?: string[];
        };
        TableWebhookCreatedResponseDto: {
            id: string;
            name: string;
            keyPrefix: string;
            restrictFields: boolean;
            allowedFieldColumnNames: string[];
            /** Format: date-time */
            createdAt: string;
            token: string;
        };
        TableWebhookResponseDto: {
            id: string;
            name: string;
            keyPrefix: string;
            restrictFields: boolean;
            allowedFieldColumnNames: string[];
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            lastUsedAt?: string | null;
            /** Format: date-time */
            revokedAt?: string | null;
        };
        UpdateTableWebhookDto: {
            name?: string;
            restrictFields?: boolean;
            allowedFieldColumnNames?: string[];
        };
        CreateVendorInboundWebhookDto: {
            name: string;
            /** Format: uuid */
            apiVendorId?: string;
            lookupColumnName: string;
            lookupPayloadPath: string;
            fieldMapping: {
                [key: string]: string;
            };
            signingSecret: string;
        };
        VendorInboundWebhookCreatedResponseDto: {
            id: string;
            name: string;
            apiVendorId?: string | null;
            keyPrefix: string;
            lookupColumnName: string;
            lookupPayloadPath: string;
            fieldMapping: {
                [key: string]: string;
            };
            /** Format: date-time */
            createdAt: string;
            token: string;
        };
        VendorInboundWebhookResponseDto: {
            id: string;
            name: string;
            apiVendorId?: string | null;
            keyPrefix: string;
            lookupColumnName: string;
            lookupPayloadPath: string;
            fieldMapping: {
                [key: string]: string;
            };
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            lastUsedAt?: string | null;
            /** Format: date-time */
            revokedAt?: string | null;
        };
        UpdateVendorInboundWebhookDto: {
            name?: string;
            /** Format: uuid */
            apiVendorId?: string;
            lookupColumnName?: string;
            lookupPayloadPath?: string;
            fieldMapping?: {
                [key: string]: string;
            };
            signingSecret?: string;
        };
        RecordsAggregateResponseDto: {
            value: number | null;
        };
        RecordsGroupCountsRowDto: {
            groupValues: unknown[];
            count: number;
        };
        RecordsGroupCountsResponseDto: {
            rows: components["schemas"]["RecordsGroupCountsRowDto"][];
        };
        RecordsGroupAggregateRowDto: {
            groupValues: unknown[];
            metrics: {
                [key: string]: number | null;
            };
        };
        RecordsGroupAggregateResponseDto: {
            rows: components["schemas"]["RecordsGroupAggregateRowDto"][];
        };
        RecordsPathChildDto: {
            segment: string;
            hasChildren: boolean;
            recordId: string | null;
        };
        RecordsPathChildrenResponseDto: {
            rows: components["schemas"]["RecordsPathChildDto"][];
        };
        CreateWorkspacePropertyDto: {
            name: string;
            description?: string;
            fieldTypeId: string;
            key: string;
            isRequired?: boolean;
            defaultValue?: string;
        };
        UpdateWorkspacePropertyDto: {
            name?: string;
            description?: string;
            fieldTypeId?: string;
            key?: string;
            isRequired?: boolean;
            defaultValue?: string;
        };
        ClaimWorkspaceDomainDto: {
            workspaceId: string;
            domain: string;
        };
        UpdateOrganizationDto: {
            name?: string;
            slug?: string;
            allowMemberWorkspaceCreation?: boolean;
        };
        CreateOrganizationMembershipDto: {
            /** Format: uuid */
            identityId: string;
            /** @enum {string} */
            role?: "ORGANIZATION_ADMIN" | "ORGANIZATION_MEMBER";
        };
        UpdateOrganizationMembershipDto: {
            /** @enum {string} */
            role: "ORGANIZATION_ADMIN" | "ORGANIZATION_MEMBER";
        };
        GrantWorkspaceMemberDto: {
            /** @enum {string} */
            role: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
        };
        OrgAiKeyOverrideWorkspaceDto: {
            id: string;
            name: string;
            slug: string;
        };
        OrgAiKeyResponseDto: {
            /** @enum {string} */
            provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            configured: boolean;
            keyPreview: string | null;
            /** @enum {string} */
            status: "UNTESTED" | "VALID" | "INVALID" | "CONNECTION_ISSUE";
            lastError: string | null;
            lastValidatedAt: string | null;
            addedByName: string | null;
            addedAt: string | null;
            overriddenByWorkspaces: components["schemas"]["OrgAiKeyOverrideWorkspaceDto"][];
        };
        UpsertOrgAiKeyDto: {
            apiKey: string;
        };
        OrgAiUsageByWorkspaceDto: {
            workspaceId: string;
            workspaceName: string;
            costUsd: number;
        };
        OrgAiUsageSummaryResponseDto: {
            totalCostUsd: number;
            workspaceCount: number;
            byWorkspace: components["schemas"]["OrgAiUsageByWorkspaceDto"][];
        };
        RegisterDto: {
            organizationName: string;
            workspaceSlug: string;
            contactName: string;
            /** Format: email */
            email: string;
            password: string;
        };
        RegisterConfirmDto: {
            token: string;
        };
        CreateWorkspaceDto: {
            name: string;
            slug: string;
            maxUsers?: number;
            maxStorageMb?: number;
            maxS3StorageMb?: number;
        };
        WorkspaceResponseDto: {
            id: string;
            slug: string;
            name: string;
            schemaName: string;
            /** @enum {string} */
            status: "ACTIVE" | "SUSPENDED";
            maxUsers: number;
            maxStorageMb: number | null;
            trashRetentionDays: number;
            allowedLoginMethods: ("PASSWORD" | "GOOGLE" | "OIDC")[];
            color?: string | null;
            icon?: string | null;
            logoStorageKey?: string | null;
            /** @description One layer of the theme cascade — see Workspace.theme in schema.source.prisma. */
            theme?: {
                [key: string]: unknown;
            } | null;
            /** @description Whether this is its organization's primary workspace (Organization.primaryWorkspaceId) — the one the org was created together with, ISSUE-1001/EPIC-023. */
            isPrimary: boolean;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        CreateWorkspaceSelfServeDto: {
            name: string;
            slug: string;
            /** Format: uuid */
            organizationId?: string;
            newOrganizationName?: string;
        };
        WorkspaceUsageSummaryDto: {
            workspaceId: string;
            slug: string;
            name: string;
            totalBytes: number;
            maxStorageBytes: number | null;
        };
        WorkspacesByStatusDto: {
            active: number;
            suspended: number;
        };
        UsersByRoleDto: {
            platformAdmin: number;
            workspaceAdmin: number;
            workspaceUser: number;
        };
        PlatformStatsDto: {
            totalWorkspaces: number;
            workspacesByStatus: components["schemas"]["WorkspacesByStatusDto"];
            totalUsers: number;
            usersByRole: components["schemas"]["UsersByRoleDto"];
            pendingInvites: number;
            totalStorageBytes: number;
            workspacesApproachingLimit: number;
            workspacesOverLimit: number;
        };
        WorkspaceS3UsageSummaryDto: {
            workspaceId: string;
            slug: string;
            name: string;
            liveBytes: number;
            maxStorageBytes: number | null;
            tracked: boolean;
        };
        UpdateWorkspaceDto: {
            name?: string;
            slug?: string;
            confirmCurrentSlug?: string;
            maxUsers?: number;
            maxStorageMb?: number | null;
            maxS3StorageMb?: number | null;
            trashRetentionDays?: number;
            allowedLoginMethods?: ("PASSWORD" | "GOOGLE" | "OIDC")[];
        };
        DeleteWorkspaceDto: {
            confirmSlug: string;
            exportOffered: boolean;
            reason?: string;
        };
        SuspendWorkspaceDto: {
            reason?: string;
        };
        MoveWorkspaceOrganizationDto: {
            /** Format: uuid */
            organizationId: string;
        };
        UpdateWorkspaceAppearanceDto: {
            color?: string | null;
            icon?: string | null;
            logoStorageKey?: string | null;
        };
        ThemeDto: {
            /** @description Whether this layer participates in the cascade. */
            enabled?: boolean;
            /**
             * Format: hex-color
             * @example #C2643A
             */
            background?: string;
            /**
             * Format: hex-color
             * @example #1A1A1A
             */
            foreground?: string;
            /** Format: hex-color */
            card?: string;
            /** Format: hex-color */
            primary?: string;
            /** Format: hex-color */
            primaryForeground?: string;
            /** Format: hex-color */
            border?: string;
            /** Format: hex-color */
            mutedForeground?: string;
            /**
             * @description CSS length, e.g. "0.625rem" or "8px".
             * @example 0.625rem
             */
            radius?: string;
            /**
             * @description Font catalog id.
             * @enum {string}
             */
            fontHeading?: "system" | "geist" | "inter" | "space-grotesk" | "dm-sans" | "outfit" | "roboto-flex" | "fraunces" | "lora" | "playfair-display" | "libre-baskerville" | "crimson-pro" | "jetbrains-mono";
            /**
             * @description Font catalog id.
             * @enum {string}
             */
            fontBody?: "system" | "geist" | "inter" | "space-grotesk" | "dm-sans" | "outfit" | "roboto-flex" | "fraunces" | "lora" | "playfair-display" | "libre-baskerville" | "crimson-pro" | "jetbrains-mono";
            /** @enum {string} */
            density?: "compact" | "comfortable";
            /** @enum {string} */
            base?: "light" | "dark" | "system";
        };
        ContrastPairDto: {
            /**
             * @description Token pair as "foreground/background".
             * @example primaryForeground/primary
             */
            pair: string;
            /**
             * @description WCAG 2.x contrast ratio, rounded to one decimal.
             * @example 3.4
             */
            ratio: number;
            /**
             * @description Against the WCAG AA normal-text threshold (4.5:1).
             * @enum {string}
             */
            level: "pass" | "fail";
        };
        ThemeStateResponseDto: {
            /** @description This scope's own stored theme layer, or {} if unset. */
            theme: components["schemas"]["ThemeDto"];
            /** @description The theme cascade merged down through this scope, keyed by token name (not CSS variable). */
            resolved: {
                [key: string]: string;
            };
            /** @description For each key in `resolved`, which scope ("workspace" | "project" | "view") it came from. */
            inheritedFrom: {
                [key: string]: string;
            };
            contrast?: components["schemas"]["ContrastPairDto"][];
        };
        UpdateThemeDto: {
            /** @description Whether this layer participates in the cascade. */
            enabled?: boolean | null;
            /**
             * Format: hex-color
             * @example #C2643A
             */
            background?: string | null;
            /**
             * Format: hex-color
             * @example #1A1A1A
             */
            foreground?: string | null;
            /** Format: hex-color */
            card?: string | null;
            /** Format: hex-color */
            primary?: string | null;
            /** Format: hex-color */
            primaryForeground?: string | null;
            /** Format: hex-color */
            border?: string | null;
            /** Format: hex-color */
            mutedForeground?: string | null;
            /**
             * @description CSS length, e.g. "0.625rem" or "8px".
             * @example 0.625rem
             */
            radius?: string | null;
            /** @description Font catalog id — validated as a bare string until the catalog ships (ISSUE-368). */
            fontHeading?: string | null;
            /** @description Font catalog id — validated as a bare string until the catalog ships (ISSUE-368). */
            fontBody?: string | null;
            /** @enum {string|null} */
            density?: "compact" | "comfortable" | null;
            /**
             * @description The public-page base — never overrides a signed-in member's own light/dark preference.
             * @enum {string|null}
             */
            base?: "light" | "dark" | "system" | null;
        };
        TableUsageDto: {
            name: string;
            tableName: string;
            totalBytes: number;
        };
        WorkspaceUsageDto: {
            totalBytes: number;
            maxStorageBytes: number | null;
            tables: components["schemas"]["TableUsageDto"][];
        };
        WorkspaceS3UsageDto: {
            /** @enum {string} */
            mode: "SYSTEM_DEFAULT" | "CUSTOM";
            bucket: string | null;
            liveBytes: number;
            maxStorageBytes: number | null;
            /** Format: date-time */
            measuredAt: string | null;
            brokenReferenceCount: number | null;
        };
        FontCatalogEntryDto: {
            /** @example fraunces */
            id: string;
            /** @example Fraunces */
            name: string;
            /** @enum {string} */
            category: "system" | "sans-serif" | "serif" | "monospace";
            /**
             * @example [
             *       "warm",
             *       "editorial",
             *       "casual"
             *     ]
             */
            tags: string[];
            /**
             * @description Variable weight-axis range [min, max], or null for `system`.
             * @example [
             *       100,
             *       900
             *     ]
             */
            weights: number[] | null;
        };
        FontCatalogResponseDto: {
            fonts: components["schemas"]["FontCatalogEntryDto"][];
        };
        AppendAgentLogEntryDto: {
            /** Format: uuid */
            agentId?: string;
            ticketReference?: string;
            outcome?: string;
            startedAt?: string;
            finishedAt?: string;
            /** @enum {string} */
            source?: "server" | "client";
            client?: string;
            workItemTable?: string;
            workItemRecordId?: string;
            originTable?: string;
            originRecordId?: string;
            model?: string;
            tokensIn?: number;
            tokensOut?: number;
            cacheReadTokens?: number;
            cacheWriteTokens?: number;
            costUsd?: number;
            promptVersion?: string;
            promptSha?: string;
        };
        AppendAgentLogCycleDto: {
            cycleIndex: number;
            occurredAt?: string;
            thinking?: Record<string, never>;
            /** @enum {string} */
            role?: "user" | "assistant";
        };
        CreateProjectDto: {
            /** Format: uuid */
            workspaceId: string;
            name: string;
            slug: string;
        };
        ProjectResponseDto: {
            id: string;
            workspaceId: string;
            slug: string;
            name: string;
            color?: string | null;
            icon?: string | null;
            /** @description One layer of the theme cascade — see Project.theme in schema.source.prisma. */
            theme?: {
                [key: string]: unknown;
            } | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            detachedFromTemplateAt: string | null;
        };
        UpdateProjectDto: {
            name?: string;
            color?: string | null;
            icon?: string | null;
        };
        TemplateProtectionSummaryDto: {
            protectedModelCount: number;
            protectedFieldCount: number;
            protectedChoiceOptionCount: number;
            detachedFromTemplateAt: string | null;
        };
        UninstallPreviewModelDto: {
            id: string;
            name: string;
            recordCount: number;
        };
        UninstallPreviewViewDto: {
            id: string;
            name: string;
        };
        UninstallPreviewDto: {
            dataModels: components["schemas"]["UninstallPreviewModelDto"][];
            views: components["schemas"]["UninstallPreviewViewDto"][];
            roleCount: number;
            externalBlockers: string[];
        };
        TemplateUpdateRemovedModelDto: {
            id: string;
            name: string;
            recordCount: number;
        };
        TemplateUpdatePreviewDto: {
            currentVersion: number;
            latestVersion: number;
            upToDate: boolean;
            createdTables: string[];
            updatedTables: string[];
            removedTables: components["schemas"]["TemplateUpdateRemovedModelDto"][];
            createdFields: string[];
            updatedFields: string[];
            removedFields: string[];
            externalBlockers: string[];
            hasUnresolvedConflicts: boolean;
            conflictReasons: string[];
        };
        TemplateUpdateDto: {
            applyTheme?: boolean;
        };
        CreateViewDto: {
            /** Format: uuid */
            projectId?: string;
            /** Format: uuid */
            workspaceId?: string;
            name: string;
        };
        ViewComponentResponseDto: {
            id: string;
            viewId: string;
            pageId: string;
            /** @enum {string} */
            type: "FORM" | "GRID" | "TREE" | "GRAPH" | "TEXT" | "KPI" | "CHART" | "KANBAN" | "GALLERY" | "MAP" | "CALENDAR" | "MEDIA" | "FEED";
            name: string;
            dataModelId?: string | null;
            config: {
                [key: string]: unknown;
            };
            layout: {
                [key: string]: unknown;
            };
            theme?: {
                [key: string]: unknown;
            } | null;
            position: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            filters: components["schemas"]["ViewComponentFilterResponseDto"][];
            dataModel?: components["schemas"]["DataModelResponseDto"] | null;
        };
        ViewPageResponseDto: {
            id: string;
            viewId: string;
            position: number;
            name: string;
            title?: string | null;
            maxWidthPx?: number | null;
            padding?: string | null;
            showTitle: boolean;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            components: components["schemas"]["ViewComponentResponseDto"][];
        };
        ViewResponseDto: {
            id: string;
            workspaceId: string;
            projectId?: string | null;
            name: string;
            slug: string;
            color?: string | null;
            icon?: string | null;
            createdById?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            published: boolean;
            publicSlug?: string | null;
            /** @enum {string} */
            accessPolicy: "ANONYMOUS_ONLY" | "AUTH_OPTIONAL" | "AUTH_REQUIRED";
            /** @description One layer of the theme cascade — see View.theme in schema.source.prisma. */
            theme?: {
                [key: string]: unknown;
            } | null;
            pages: components["schemas"]["ViewPageResponseDto"][];
        };
        UpdateViewDto: {
            name?: string;
            recordLinkOnly?: boolean;
            color?: string | null;
            icon?: string | null;
        };
        MoveViewDto: {
            /** Format: uuid */
            targetProjectId?: string | null;
        };
        SetPublishedDto: {
            published: boolean;
        };
        SetAccessPolicyDto: {
            /** @enum {string} */
            accessPolicy: "ANONYMOUS_ONLY" | "AUTH_OPTIONAL" | "AUTH_REQUIRED";
        };
        RegeneratePublicSlugDto: {
            regenerate?: boolean;
        };
        CreatePageDto: {
            name: string;
            title?: string;
        };
        ReorderViewPagesDto: {
            pageIds: string[];
        };
        UpdatePageDto: {
            name?: string;
            title?: string;
            maxWidthPx?: number | null;
            /** @enum {string|null} */
            padding?: "none" | "sm" | "md" | "lg" | null;
            showTitle?: boolean;
        };
        ViewSubmissionDraftResponseDto: {
            id: string;
            viewId: string;
            userId: string;
            currentPageId?: string | null;
            answers: {
                [key: string]: unknown;
            };
            recordIds: {
                [key: string]: unknown;
            };
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            /** Format: date-time */
            expiresAt: string;
        };
        UpsertDraftDto: {
            /** Format: uuid */
            currentPageId?: string;
            answers: {
                [key: string]: {
                    [key: string]: unknown;
                };
            };
            recordIds?: {
                [key: string]: string;
            };
        };
        ViewComponentFilterDto: {
            columnName: string;
            /** @enum {string} */
            operator: "EQ" | "NEQ" | "GT" | "GTE" | "LT" | "LTE" | "CONTAINS" | "NOT_CONTAINS" | "LIKE" | "NOT_LIKE" | "IN" | "NOT_IN" | "IS_NULL" | "IS_NOT_NULL" | "WITHIN_LAST" | "NOT_WITHIN_LAST";
            /** @enum {string} */
            valueSource?: "STATIC" | "COMPONENT_SELECTION" | "QUERY_PARAM";
            value?: Record<string, never>;
        };
        CreateViewComponentDto: {
            /** @enum {string} */
            type: "TEXT" | "FORM" | "GRID" | "TREE" | "GRAPH" | "KPI" | "CHART" | "KANBAN" | "GALLERY" | "MAP" | "CALENDAR" | "MEDIA" | "FEED";
            /** Format: uuid */
            pageId: string;
            name: string;
            /** Format: uuid */
            dataModelId?: string;
            /** Format: uuid */
            savedGridViewId?: string;
            /** Format: uuid */
            basedOnVisualizationId?: string;
            config?: {
                [key: string]: unknown;
            };
            layout?: {
                [key: string]: unknown;
            };
            filters?: components["schemas"]["ViewComponentFilterDto"][];
        };
        ReorderViewComponentsDto: {
            /** Format: uuid */
            pageId: string;
            componentIds: string[];
        };
        UpdateViewComponentDto: {
            name?: string;
            /** Format: uuid */
            dataModelId?: string;
            /** Format: uuid */
            savedGridViewId?: string | null;
            /** Format: uuid */
            basedOnVisualizationId?: string | null;
            config?: {
                [key: string]: unknown;
            };
            layout?: {
                [key: string]: unknown;
            };
            filters?: components["schemas"]["ViewComponentFilterDto"][];
        };
        ImportManifestDto: {
            formatVersion: number;
            exportedAt: string;
            sourceWorkspaceId: string;
            fieldTypes: Record<string, never>[];
            systemFieldTypes: Record<string, never>[];
            dataModels: Record<string, never>[];
            relationships: Record<string, never>[];
            views?: Record<string, never>[];
            workflows?: Record<string, never>[];
            sampleRecords?: Record<string, never>[];
            template?: Record<string, never>;
            contract?: Record<string, never>;
            theme?: Record<string, never>;
        };
        CreateFormulaFieldDto: {
            name: string;
            columnName?: string;
            /** @enum {string} */
            resultType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME";
            formula: string;
            decimalPlaces?: number;
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
        };
        UpdateFormulaFieldDto: {
            name?: string;
            columnName?: string;
            formula?: string;
            decimalPlaces?: number | null;
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
        };
        CreateRelationshipDto: {
            name: string;
            /** Format: uuid */
            targetModelId: string;
            /** Format: uuid */
            targetKeyId?: string;
            isRequired?: boolean;
            /** @enum {string} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL";
        };
        CallWebhookConfigSchema: {
            url: string;
            /** @enum {string} */
            method?: "POST" | "PUT" | "PATCH";
            /** @description HTTP header name -> value. */
            headers?: {
                [key: string]: string;
            };
            /**
             * @description DEFAULT (default) POSTs `{ event, dataModelId, recordId, record }`. CUSTOM sends `payloadTemplate` instead.
             * @enum {string}
             */
            payloadMode?: "DEFAULT" | "CUSTOM";
            /** @description JSON-shaped text with `{{...}}` jexl spans, required when payloadMode is CUSTOM. The user supplies their own quotes around string values; a value spliced into the user's quotes is JSON-string-escaped automatically. Must resolve to syntactically valid JSON. */
            payloadTemplate?: string;
        };
        UpdateRecordConfigSchema: {
            /** @description Keyed by target column name. Each value is either a literal, or a `{{...}}`-wrapped jexl expression resolved against the triggering record — e.g. `{{sourceColumn}}`, `{{sourceColumn.path}}`, or `{{FIRST(sourceColumn, "path")}}` to pull a value out of a multi-valued source field (first array element for which "path" resolves). A reference that does not resolve leaves the target column untouched. */
            values: {
                [key: string]: unknown;
            };
            /** @description Column names (must also be keys in `values`) to write only when the record's current value for that column is null/undefined. */
            onlyIfEmptyFields?: string[];
        };
        RetireRecordLinksConfigSchema: {
            /** @description Stable columnName of one RecordLinkField lens to retire; omit to retire every public link on the record. */
            recordLinkColumnName?: string;
            /** @description Grace period in days before the link actually expires. Defaults to 30; 0 retires immediately. */
            graceDays?: number;
        };
        CreateNotificationConfigSchema: {
            message: string;
            /** @description Omit to notify every user in the workspace. */
            userId?: string;
            /** @description Optional headline; same {{field:x}} interpolation as message. Omit to fall back to the triggering workflow's name in the bell. */
            title?: string;
        };
        SendEmailConfigSchema: {
            /** @description A literal address, or a `{{...}}`-wrapped jexl expression (e.g. `{{columnName}}`) to read the recipient off the triggering record. */
            to: string;
            subject: string;
            /** @description May embed `{{...}}` jexl expressions. `{{recordLink("<view name or slug>")}}` mints a fetch-or-created public record link URL for the triggering record — same as CALL_VENDOR_API's `recordLink(...)` function. Rendered per `format`: PLAIN preserves newlines as `<br>` in the HTML part and sends the same string as plain text; MARKDOWN renders sanitized HTML from the body and sends the Markdown source as the plain-text part. */
            body: string;
            /**
             * @description Defaults to PLAIN.
             * @enum {string}
             */
            format?: "PLAIN" | "MARKDOWN";
        };
        SyncSheetConfigSchema: {
            /** @description Full Google Sheets URL or bare spreadsheet id. */
            spreadsheetUrl: string;
            /** @description A1-notation range or sheet/tab name, e.g. "Sheet1" or "Sheet1!A1:F". */
            range: string;
            columnMapping: {
                [key: string]: string;
            };
            /** @enum {string} */
            mode: "CREATE" | "UPSERT";
            upsertKeyColumn?: string;
        };
        SendDigestEmailRecordsFilterSchema: {
            dataModelId: string;
            filters?: Record<string, never>;
        };
        SendDigestEmailMarkSentThroughSchema: {
            throughColumnName: string;
            dataModelId: string;
            dateColumnName: string;
        };
        SendDigestEmailConfigSchema: {
            /** @description Plain literal address only — there is no triggering record to resolve a `{{...}}` expression against. */
            to: string;
            subject: string;
            recordsFilter: components["schemas"]["SendDigestEmailRecordsFilterSchema"];
            /** @description Column names from recordsFilter.dataModelId's model, included per row in the digest table, in order. */
            columns: string[];
            /** @description Shown as the whole email body when zero records match. */
            emptyMessage?: string;
            /** @description Idempotency stamp applied after a successful send; omit for a one-shot digest. */
            markSentThrough?: components["schemas"]["SendDigestEmailMarkSentThroughSchema"];
        };
        GeocodeAddressConfigSchema: {
            /** @description Plain text address column on the triggering record, e.g. an event's "Location". */
            addressColumnName: string;
            latColumnName: string;
            lonColumnName: string;
        };
        ModerateContentConfigSchema: {
            /** @description Columns concatenated and classified together. */
            columns: string[];
            statusColumnName: string;
            approvedValue: string;
            rejectedValue: string;
            /** @description Written alongside rejectedValue when the classifier gives a reason. */
            reasonColumnName?: string;
        };
        CallVendorApiConfigSchema: {
            /** @description ApiVendor id from the platform catalog. */
            apiVendorId: string;
            /** @description ApiRequest id under that vendor. */
            apiRequestId: string;
            /** @description One jexl expression per ApiRequestParameter.key, evaluated against `{ record: <triggering record>, ...<record> }` (e.g. `record.email`, or a literal `'foo'`). `recordLink('<view name or slug>')` mints a public record link URL for the triggering record. */
            parameterValues: {
                [key: string]: string;
            };
        };
        RunScriptConfigSchema: {
            /** @description Body of an async function, run inside a QuickJS sandbox against the host API (ctx/db/http/vendor/notify/mail) — see docs/CUSTOM_LOGIC_PLAN.md §3. */
            source: string;
            /** @description Wall-clock timeout in milliseconds for this run. */
            timeoutMs?: number;
        };
        CreateRecordConfigSchema: {
            /** @description Id of the table to create a row in — a *different* table than the one this workflow is defined on. */
            dataModelId: string;
            /** @description Keyed by target column name, same resolution as UPDATE_RECORD's `values`: a literal, or a `{{...}}`-wrapped jexl expression resolved against the triggering record (e.g. `{{record.id}}` to link the new row back to its parent via a REFERENCE column). An unresolved reference simply omits that key from the create. */
            values: {
                [key: string]: unknown;
            };
        };
        CreateWorkflowActionDto: {
            /** @enum {string} */
            type: "SEND_EMAIL" | "CALL_WEBHOOK" | "UPDATE_RECORD" | "CREATE_NOTIFICATION" | "SYNC_SHEET" | "RETIRE_RECORD_LINKS" | "SEND_DIGEST_EMAIL" | "GEOCODE_ADDRESS" | "MODERATE_CONTENT" | "CALL_VENDOR_API" | "RUN_SCRIPT" | "CREATE_RECORD" | "START_AGENT_RUN";
            /** @description Shape depends on `type` — matches the correspondingly-named *ConfigSchema below (e.g. type: SEND_EMAIL uses SendEmailConfigSchema's shape). */
            config: {
                [key: string]: unknown;
            } & (components["schemas"]["SendEmailConfigSchema"] | components["schemas"]["CallWebhookConfigSchema"] | components["schemas"]["UpdateRecordConfigSchema"] | components["schemas"]["CreateNotificationConfigSchema"] | components["schemas"]["SyncSheetConfigSchema"] | components["schemas"]["RetireRecordLinksConfigSchema"] | components["schemas"]["SendDigestEmailConfigSchema"] | components["schemas"]["GeocodeAddressConfigSchema"] | components["schemas"]["ModerateContentConfigSchema"] | components["schemas"]["CallVendorApiConfigSchema"] | components["schemas"]["RunScriptConfigSchema"]);
        };
        CreateWorkflowDefinitionDto: {
            name: string;
            enabled?: boolean;
            /** @enum {string} */
            triggerType: "RECORD_CREATED" | "RECORD_UPDATED" | "RECORD_DELETED" | "SCHEDULED";
            triggerFieldColumnName?: string;
            triggerCondition?: {
                [key: string]: unknown;
            };
            scheduleCron?: string;
            actions: components["schemas"]["CreateWorkflowActionDto"][];
        };
        UpdateWorkflowDefinitionDto: {
            name?: string;
            enabled?: boolean;
            /** @enum {string} */
            triggerType?: "RECORD_CREATED" | "RECORD_UPDATED" | "RECORD_DELETED" | "SCHEDULED";
            triggerFieldColumnName?: string | null;
            triggerCondition?: {
                [key: string]: unknown;
            } | null;
            scheduleCron?: string | null;
            actions?: components["schemas"]["CreateWorkflowActionDto"][];
        };
        TestRunWorkflowDto: {
            recordId?: string;
        };
        UpdateTableSyncDto: {
            enabled: boolean;
            scheduleCron?: string;
            upsertKeyColumn?: string;
        };
        MintRecordLinkDto: Record<string, never>;
        CreateRecordLinkFieldDto: {
            name: string;
            columnName?: string;
            label: string;
            /** Format: uuid */
            viewId: string;
        };
        UpdateRecordLinkFieldDto: {
            name?: string;
            columnName?: string;
            label?: string;
            /** Format: uuid */
            viewId?: string;
        };
        WorkspaceAiKeyEffectiveDto: {
            /** @enum {string} */
            provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            /** @enum {string} */
            effectiveSource: "WORKSPACE" | "ORGANIZATION" | "PLATFORM" | "NONE";
            keyPreview: string | null;
            /** @enum {string|null} */
            status: "UNTESTED" | "VALID" | "INVALID" | "CONNECTION_ISSUE" | null;
            lastError: string | null;
            lastValidatedAt: string | null;
            organizationKeyConfigured: boolean;
            /** @enum {string|null} */
            organizationKeyStatus: "UNTESTED" | "VALID" | "INVALID" | "CONNECTION_ISSUE" | null;
            organizationKeyPreview: string | null;
            organizationKeyAddedByName: string | null;
        };
        WorkspaceAiConfigResponseDto: {
            hasAnthropicApiKey: boolean;
            hasOpenAiApiKey: boolean;
            platformAnthropicKeyAvailable: boolean;
            agentEnabledForWorkspaceUsers: boolean;
            hasRepoAccessToken: boolean;
            hostedAgentsEnabled: boolean;
            aiKeys: components["schemas"]["WorkspaceAiKeyEffectiveDto"][];
        };
        UpsertWorkspaceAiConfigDto: {
            anthropicApiKey?: string;
            clearAnthropicApiKey?: boolean;
            openAiApiKey?: string;
            clearOpenAiApiKey?: boolean;
            googleApiKey?: string;
            clearGoogleApiKey?: boolean;
            repoAccessToken?: string;
            clearRepoAccessToken?: boolean;
            agentEnabledForWorkspaceUsers?: boolean;
            hostedAgentsEnabled?: boolean;
        };
        WorkspaceAiKeyListItemDto: {
            /** @enum {string} */
            provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            configured: boolean;
            keyPreview: string | null;
            /** @enum {string} */
            status: "UNTESTED" | "VALID" | "INVALID" | "CONNECTION_ISSUE";
            lastError: string | null;
            lastValidatedAt: string | null;
        };
        WorkspaceAiUsageSummaryResponseDto: {
            workspaceId: string;
            workspaceName: string;
            costUsd: number;
        };
        UpsertApiVendorDto: {
            name: string;
            /** @enum {string} */
            authType: "API_KEY" | "OAUTH2" | "BASIC";
            baseUrl?: string;
            /** @enum {string} */
            apiKeyLocation?: "HEADER" | "QUERY";
            apiKeyName?: string;
            oauthAuthorizeUrl?: string;
            oauthTokenUrl?: string;
            oauthClientId?: string;
            oauthClientSecret?: string;
            oauthScopes?: string;
        };
        UpsertApiRequestDto: {
            name: string;
            /** @enum {string} */
            httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
            urlTemplate: string;
            headerTemplates?: {
                [key: string]: string;
            };
            parameters?: Record<string, never>[];
        };
        SetApiKeyDto: {
            apiKey: string;
        };
        SetBasicAuthDto: {
            username: string;
            password: string;
        };
        AgentAvailabilityResponseDto: {
            /** @description True when this caller may open a conversation right now. */
            available: boolean;
            /**
             * @description Why not, when `available` is false. `no-api-key`: neither this workspace nor the platform has an Anthropic key configured. `disabled-for-workspace-users`: a workspace admin turned the agent off for this role.
             * @enum {string}
             */
            reason?: "no-api-key" | "disabled-for-workspace-users";
        };
        AgentChatMessageDto: {
            /** @enum {string} */
            role: "user" | "assistant";
            content: string;
        };
        AgentUiContextDataModelDto: {
            id: string;
            name: string;
        };
        AgentUiContextViewDto: {
            id: string;
            name: string;
            filters?: Record<string, never>;
            sort?: Record<string, never>;
            groupBy?: Record<string, never>[];
        };
        AgentUiContextProjectDto: {
            id: string;
            name: string;
        };
        AgentUiContextDto: {
            dataModel?: components["schemas"]["AgentUiContextDataModelDto"];
            view?: components["schemas"]["AgentUiContextViewDto"];
            project?: components["schemas"]["AgentUiContextProjectDto"];
        };
        AgentChatRequestDto: {
            messages: components["schemas"]["AgentChatMessageDto"][];
            uiContext?: components["schemas"]["AgentUiContextDto"];
            /** Format: uuid */
            agentPersonaId?: string;
        };
        AgentToolCallDto: {
            name: string;
            input: {
                [key: string]: unknown;
            };
            resultStatus: number;
        };
        AgentQuestionDto: {
            prompt: string;
            options: string[];
            allowMultiple?: boolean;
            allowOther?: boolean;
        };
        AgentChatResponseDto: {
            reply: string;
            toolCalls: components["schemas"]["AgentToolCallDto"][];
            question?: components["schemas"]["AgentQuestionDto"];
            personaName: string;
        };
        UpdatePreferencesDto: {
            patch: {
                [key: string]: unknown;
            };
        };
        PushConfigResponseDto: {
            /** @description Whether this install has a VAPID key pair configured. */
            enabled: boolean;
            vapidPublicKey?: string | null;
        };
        PushSubscriptionKeysDto: {
            p256dh: string;
            auth: string;
        };
        SubscribePushDto: {
            /**
             * Format: uri
             * @description The browser's PushSubscription.endpoint URL.
             */
            endpoint: string;
            keys: components["schemas"]["PushSubscriptionKeysDto"];
        };
        PushSubscriptionResponseDto: {
            id: string;
            /** @description Short human label parsed from the User-Agent at subscribe time, e.g. "Safari on iPhone". */
            userAgentLabel?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            lastUsedAt: string;
        };
        UnsubscribePushDto: {
            /**
             * Format: uri
             * @description The browser's PushSubscription.endpoint URL.
             */
            endpoint: string;
        };
        CreateButtonFieldDto: {
            name: string;
            columnName?: string;
            label: string;
            /** @enum {string} */
            actionKind: "OPEN_FORM" | "OPEN_VIEW" | "START_AGENT_CHAT" | "RUN_AGENT_IN_BACKGROUND" | "CUSTOM_SCRIPT";
            /** @enum {string} */
            prominence?: "MENU" | "PRIMARY";
            /** Format: uuid */
            formComponentId?: string;
            prefillSourceColumnName?: string;
            prefillQueryParam?: string;
            /** Format: uuid */
            viewId?: string;
            pageSlugOrId?: string;
            sourceColumnName?: string;
            queryParam?: string;
            /** Format: uuid */
            agentPersonaId?: string;
            agentPromptTemplate?: string;
            imageColumnNames?: string[];
            outputFieldMapping?: {
                [key: string]: string;
            };
            scriptSource?: string;
            scriptTimeoutMs?: number;
        };
        UpdateButtonFieldDto: {
            name?: string;
            columnName?: string;
            label?: string;
            /** @enum {string} */
            prominence?: "MENU" | "PRIMARY";
            /** Format: uuid */
            formComponentId?: string;
            prefillSourceColumnName?: string;
            prefillQueryParam?: string;
            /** Format: uuid */
            viewId?: string;
            pageSlugOrId?: string;
            sourceColumnName?: string;
            queryParam?: string;
            /** Format: uuid */
            agentPersonaId?: string;
            agentPromptTemplate?: string;
            imageColumnNames?: string[];
            outputFieldMapping?: {
                [key: string]: string;
            };
            scriptSource?: string;
            scriptTimeoutMs?: number;
        };
        TriggerAgentButtonActionDto: {
            /** Format: uuid */
            recordId: string;
        };
        CreateLookupFieldDto: {
            name: string;
            columnName?: string;
            /** Format: uuid */
            sourceFieldId: string;
            /** @enum {string} */
            targetFieldKind: "DATA_FIELD" | "DERIVED_FIELD" | "LOOKUP_FIELD" | "ROLLUP_FIELD";
            /** Format: uuid */
            targetFieldId: string;
            /** Format: uuid */
            fieldTypeId?: string;
        };
        UpdateLookupFieldDto: {
            name?: string;
            columnName?: string;
            /** Format: uuid */
            fieldTypeId?: string | null;
        };
        CreateRollupFieldDto: {
            name: string;
            columnName?: string;
            /** Format: uuid */
            childFieldId: string;
            /** @enum {string} */
            aggregateOp: "SUM" | "AVG" | "MIN" | "MAX" | "COUNT";
            /** @enum {string} */
            targetFieldKind?: "DATA_FIELD" | "DERIVED_FIELD" | "LOOKUP_FIELD" | "ROLLUP_FIELD";
            /** Format: uuid */
            targetFieldId?: string;
            /** Format: uuid */
            fieldTypeId?: string;
        };
        UpdateRollupFieldDto: {
            name?: string;
            columnName?: string;
            /** Format: uuid */
            fieldTypeId?: string | null;
        };
        CreateWorkspaceFormulaDto: {
            name: string;
            description?: string;
            parameters: string[];
            expression: string;
        };
        TestWorkspaceFormulaDto: {
            expression: string;
            parameters?: string[];
            args?: {
                [key: string]: unknown;
            };
        };
        UpdateWorkspaceFormulaDto: {
            name?: string;
            description?: string;
            parameters?: string[];
            expression?: string;
            confirmBreakingChange?: boolean;
        };
        UpsertSsoConnectionDto: {
            ownerOrganizationId: string;
            /** @enum {string} */
            kind?: "OIDC" | "SAML" | "GOOGLE";
            name: string;
            issuer?: string;
            clientId?: string;
            clientSecret?: string;
            groupsClaim?: string;
            allowedEmailDomains?: string[];
        };
        UpsertWorkspaceSsoBindingDto: {
            jitEnabled?: boolean;
            /** @enum {string} */
            defaultRole?: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
            ssoRequired?: boolean;
            enabled?: boolean;
        };
        UpsertSsoGroupMappingDto: {
            groupValue: string;
            workspaceId: string;
            /** @enum {string} */
            role: "WORKSPACE_ADMIN" | "WORKSPACE_USER";
            roleId?: string;
            projectId?: string;
        };
        ResolveShipsByPublicKeyDto: {
            sshPublicKey: string;
        };
        MarkShipConnectedDto: {
            tunnelUrl: string;
            mcpSecret?: string;
        };
        CreateSavedGridViewDto: {
            name: string;
            config: {
                [key: string]: unknown;
            };
            isShared?: boolean;
        };
        UpdateSavedGridViewDto: {
            name?: string;
            config?: {
                [key: string]: unknown;
            };
            isShared?: boolean;
            color?: string | null;
            icon?: string | null;
        };
        CreateSavedChartVisualizationDto: {
            name: string;
            config: {
                [key: string]: unknown;
            };
        };
        UpdateSavedChartVisualizationDto: {
            name?: string;
            config?: {
                [key: string]: unknown;
            };
        };
        CreateImportJobDto: {
            storageKey: string;
            fileName: string;
            /** @enum {string} */
            mode: "CREATE" | "UPSERT";
            upsertKeyColumn?: string;
            columnMapping: {
                [key: string]: string;
            };
        };
        WorkspaceExportJobResponseDto: {
            id: string;
            workspaceId: string;
            /** @enum {string} */
            status: "PENDING" | "BUILDING" | "READY" | "FAILED";
            phase?: string | null;
            progressCurrent: number;
            progressTotal: number;
            sizeBytes?: number | null;
            errorMessage?: string | null;
            createdAt: string;
            startedAt?: string | null;
            completedAt?: string | null;
            downloadedAt?: string | null;
            expiresAt?: string | null;
            downloadUrl?: string | null;
        };
        PublishLibraryTemplateDto: {
            /** Format: uuid */
            projectId: string;
            identifier: string;
            name: string;
            description: string;
            icon?: string;
            organizationScoped?: boolean;
        };
        InstallLibraryTemplateDto: {
            /** Format: uuid */
            workspaceId: string;
            projectName?: string;
            applyTheme?: boolean;
        };
        SlackTargetTableInputDto: {
            /** Format: uuid */
            id?: string;
            name: string;
            /** Format: uuid */
            dataModelId: string;
            /** Format: uuid */
            recordLinkViewId?: string | null;
            /** Format: uuid */
            targetFormViewId?: string | null;
        };
        ReplaceSlackTargetTablesDto: {
            targetTables: components["schemas"]["SlackTargetTableInputDto"][];
        };
        CompleteSlackInstallDto: {
            /** Format: uuid */
            targetDataModelId: string;
            /** Format: uuid */
            targetFormViewId?: string;
        };
        TableUrlSourceDto: {
            /** @enum {string} */
            kind: "GOOGLE_SHEET" | "URL";
            spreadsheetUrl?: string;
            range?: string;
            url?: string;
        };
        CreateTableFieldDto: {
            sourceHeader: string;
            name: string;
            columnName?: string;
            /** @enum {string} */
            baseType: "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE";
        };
        CreateTableFromUrlDto: {
            /** Format: uuid */
            projectId?: string;
            /** Format: uuid */
            workspaceId?: string;
            name: string;
            source: components["schemas"]["TableUrlSourceDto"];
            fields: components["schemas"]["CreateTableFieldDto"][];
        };
        CreateTableFromFileDto: {
            /** Format: uuid */
            projectId?: string;
            /** Format: uuid */
            workspaceId?: string;
            name: string;
            storageKey: string;
            fileName: string;
            fields: components["schemas"]["CreateTableFieldDto"][];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AppController_getHello: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    AppController_healthCheck: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_authConfig: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_ssoConfig: {
        parameters: {
            query?: {
                workspaceSlug?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_ssoConfigLogo: {
        parameters: {
            query?: {
                workspaceSlug?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_googleStart: {
        parameters: {
            query?: {
                workspaceSlug?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_googleCallback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_ssoStart: {
        parameters: {
            query?: {
                workspaceSlug?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_ssoCallback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_bootstrapAdmin: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BootstrapAdminDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BootstrapAdminResponseDto"];
                };
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LogoutResponseDto"];
                };
            };
        };
    };
    AuthController_me: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_updateMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateNameDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_updateMyAvatar: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAvatarDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_myWorkspaces: {
        parameters: {
            query?: {
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyWorkspacesResponseDto"];
                };
            };
        };
    };
    AuthController_pinWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_unpinWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_switchWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SwitchWorkspaceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SwitchWorkspaceResponseDto"];
                };
            };
        };
    };
    AuthController_createInvite: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInviteDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateInviteResponseDto"];
                };
            };
        };
    };
    AuthController_inviteWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_acceptInvite: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcceptInviteDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_forgotPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ForgotPasswordDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_resetPasswordValid: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_resetPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResetPasswordDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_requestMagicLink: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MagicLinkRequestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_consumeMagicLink: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MagicLinkConsumeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticatedUserResponseDto"];
                };
            };
        };
    };
    AuthController_changePassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChangePasswordDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UsersController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UsersController_accessSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UsersController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UsersController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspaceMembersController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiKeysController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKeyResponseDto"][];
                };
            };
        };
    };
    ApiKeysController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateApiKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKeyCreatedResponseDto"];
                };
            };
        };
    };
    ApiKeysController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DeviceAuthController_authorize: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeviceAuthorizeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceAuthorizeResponseDto"];
                };
            };
        };
    };
    DeviceAuthController_getInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userCode: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceInfoResponseDto"];
                };
            };
        };
    };
    DeviceAuthController_confirm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeviceConfirmDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DeviceAuthController_poll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeviceTokenDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceTokenResponseDto"];
                };
            };
        };
    };
    RolesController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RolesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRoleDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRoleDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RolesController_clone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setModelGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetModelGrantDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setFieldGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                dataFieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetFieldGrantDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setButtonFieldGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                buttonFieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetButtonFieldGrantDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setViewGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                viewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetViewGrantDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setGridViewGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                gridViewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetGridViewGrantDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RolesController_setCapability: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                capability: "MANAGE_VIEWS" | "MANAGE_DATA_MODELS" | "MANAGE_WORKFLOWS";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetCapabilityDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProjectRoleAssignmentsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProjectRoleAssignmentsController_assign: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignProjectRoleDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProjectRoleAssignmentsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                projectId: string;
                membershipId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    GroupsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOrganizationGroupDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationGroupDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_listMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_addMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddGroupMemberDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_removeMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
                membershipId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_setProjectRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignGroupProjectRoleDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_removeProjectRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_setWorkspaceRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignGroupWorkspaceRoleDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupsController_removeWorkspaceRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                organizationId: string;
                id: string;
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupProjectRoleAssignmentsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    GroupWorkspaceRoleAssignmentsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FilesController_upload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    fieldTypeId?: string;
                    targetMediaLibrary?: string;
                    sourceMediaItemId?: string;
                    editState?: string;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FilesController_uploadFromUrl: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FilesController_download: {
        parameters: {
            query?: {
                download?: unknown;
            };
            header?: never;
            path: {
                workspaceId: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_mediaLibraryRows: {
        parameters: {
            query?: {
                limit?: unknown;
                offset?: unknown;
                sheet?: unknown;
            };
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_rows: {
        parameters: {
            query?: {
                limit?: unknown;
                offset?: unknown;
                sheet?: unknown;
            };
            header?: never;
            path: {
                workspaceId: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_downloadZip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_transform: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateImageTransformDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FilesController_getEditState: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_cropMediaLibraryItem: {
        parameters: {
            query: {
                /** @description Target height in px. Integer, 16-4096. */
                h: number;
                /** @description Target width in px. Integer, 16-4096. */
                w: number;
            };
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FilesController_filterPreviews: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FilterPreviewsDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspaceStorageConfigController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceStorageConfigResponseDto"];
                };
            };
        };
    };
    WorkspaceStorageConfigController_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertWorkspaceStorageConfigDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceStorageConfigResponseDto"];
                };
            };
        };
    };
    IdentityAvatarController_avatar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                identityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypesController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFieldTypeDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteFieldTypeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateFieldTypeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypesController_getUsage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypesController_addChoiceOption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFieldTypeChoiceOptionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypesController_getReassignCandidates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypeTemplatesController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypeTemplatesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFieldTypeDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypeTemplatesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypeTemplatesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteFieldTypeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypeTemplatesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateFieldTypeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FieldTypeTemplatesController_getUsage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypeTemplatesController_pushPreview: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FieldTypeTemplatesController_push: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PushFieldTypeTemplateDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MediaLibraryAdminController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MediaLibraryItemListResponseDto"];
                };
            };
        };
    };
    MediaLibraryAdminController_getUsage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MediaLibraryItemUsageResponseDto"][];
                };
            };
        };
    };
    MediaLibraryAdminController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_liveUpdates: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    DataModelsController_findAll: {
        parameters: {
            query?: {
                projectId?: string;
                workspaceId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelResponseDto"][];
                };
            };
        };
    };
    DataModelsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDataModelDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelResponseDto"];
                };
            };
        };
    };
    DataModelsController_findOne: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelResponseDto"];
                };
            };
        };
    };
    DataModelsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDataModelDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelResponseDto"];
                };
            };
        };
    };
    DataModelsController_getAccess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelAccessResponseDto"];
                };
            };
        };
    };
    DataModelsController_getFieldAccess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelFieldAccessResponseDto"];
                };
            };
        };
    };
    DataModelsController_getCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    DataModelsController_previewRetention: {
        parameters: {
            query?: {
                retentionDays?: number;
                retentionColumn?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_getReverseReferences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_move: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveDataModelDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MoveDataModelResponseDto"];
                };
            };
        };
    };
    DataModelsController_addField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDataFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataFieldResponseDto"];
                };
            };
        };
    };
    DataModelsController_reorderFields: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDataFieldsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataFieldResponseDto"][];
                };
            };
        };
    };
    DataModelsController_deleteField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_updateField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDataFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataFieldResponseDto"];
                };
            };
        };
    };
    DataModelsController_findKeys: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelKeyResponseDto"][];
                };
            };
        };
    };
    DataModelsController_addKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDataModelKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataModelKeyResponseDto"];
                };
            };
        };
    };
    DataModelsController_findRules: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    DataModelsController_addRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRecordRuleDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_deleteRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                ruleId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_updateRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                ruleId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRecordRuleDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_reorderRules: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderRecordRulesDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_findWebhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TableWebhookResponseDto"][];
                };
            };
        };
    };
    DataModelsController_createWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTableWebhookDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TableWebhookCreatedResponseDto"];
                };
            };
        };
    };
    DataModelsController_revokeWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_updateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTableWebhookDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TableWebhookResponseDto"];
                };
            };
        };
    };
    DataModelsController_findVendorWebhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VendorInboundWebhookResponseDto"][];
                };
            };
        };
    };
    DataModelsController_createVendorWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVendorInboundWebhookDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VendorInboundWebhookCreatedResponseDto"];
                };
            };
        };
    };
    DataModelsController_revokeVendorWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelsController_updateVendorWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateVendorInboundWebhookDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VendorInboundWebhookResponseDto"];
                };
            };
        };
    };
    TableWebhookIntakeController_intake: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_list: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                cursor?: string;
                filters?: string;
                search?: string;
                sort?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    RecordsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_query: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    RecordsController_count: {
        parameters: {
            query?: {
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                /** @description Free-text search across this model's searchable fields, AND-ed with `filters` if both are given. */
                search?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_aggregate: {
        parameters: {
            query: {
                /** @description The field to aggregate — a columnName from GET /data-models/{id}, not its display name. */
                columnName: string;
                /** @description One of COUNT, SUM, AVG, MIN, MAX. */
                op: string;
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                /** @description Free-text search across this model's searchable fields, AND-ed with `filters` if both are given. */
                search?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordsAggregateResponseDto"];
                };
            };
        };
    };
    RecordsController_groupCounts: {
        parameters: {
            query: {
                /** @description URL-encoded JSON array of grouping columns — each entry is either a bare column-name string, or `{"columnName": string, "granularity": "day"|"week"|"month"}` to bucket a DATE/DATETIME column into calendar periods instead of grouping on every distinct stored instant, e.g. `["region", {"columnName":"created_at","granularity":"month"}]`. */
                groupBy: string;
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                /** @description Free-text search across this model's searchable fields, AND-ed with `filters` if both are given. */
                search?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordsGroupCountsResponseDto"];
                };
            };
        };
    };
    RecordsController_groupAggregate: {
        parameters: {
            query: {
                /** @description URL-encoded JSON array of grouping columns — each entry is either a bare column-name string, or `{"columnName": string, "granularity": "day"|"week"|"month"}` to bucket a DATE/DATETIME column into calendar periods instead of grouping on every distinct stored instant, e.g. `["region", {"columnName":"created_at","granularity":"month"}]`. */
                groupBy: string;
                /** @description URL-encoded JSON array of `{"columnName": string, "op": "COUNT"|"SUM"|"AVG"|"MIN"|"MAX", "alias": string}` — one entry per metric in the result, keyed by `alias`, e.g. `[{"columnName":"revenue","op":"SUM","alias":"totalRevenue"}]`. */
                metrics: string;
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                /** @description Free-text search across this model's searchable fields, AND-ed with `filters` if both are given. */
                search?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordsGroupAggregateResponseDto"];
                };
            };
        };
    };
    RecordsController_pathChildren: {
        parameters: {
            query: {
                /** @description The PATH-format field to browse — a columnName from GET /data-models/{id}. */
                pathColumn: string;
                /** @description The folder path to list children of, e.g. "/" for the root or "/about" for a subfolder. */
                prefix: string;
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordsPathChildrenResponseDto"];
                };
            };
        };
    };
    RecordsController_listRecentlyDeleted: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_listTrash: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                cursor?: string;
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                search?: string;
                sort?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    RecordsController_countTrash: {
        parameters: {
            query?: {
                /** @description URL-encoded JSON — the same filter tree `POST .../records/query` takes in its body, just as a query-string value instead of a request body: either a single `{"combinator": "AND" | "OR", "conditions": FilterNode[]}` group (each FilterNode itself a nested group or a leaf `{"columnName": string, "operator": string, "value"?: unknown}`), or — as a shorthand for one implicit top-level AND-group — a bare array of leaf conditions, e.g. `[{"columnName":"status","operator":"EQ","value":"open"}]`. Valid operators: EQ, NEQ, GT, GTE, LT, LTE, CONTAINS, NOT_CONTAINS, LIKE, NOT_LIKE, IN, NOT_IN, IS_NULL, IS_NOT_NULL (value is omitted for IS_NULL/IS_NOT_NULL, and must be an array for IN/NOT_IN). `columnName` is a field's columnName from GET /data-models/{id}, not its display name. On a user-reference column (created_by_id, updated_by_id, a member-REFERENCE field), `value` may instead be `{"valueKind": "CURRENT_USER"}` (bare, or as an element inside an IN/NOT_IN array) — resolved to the requesting user's own id at query time, so one saved filter reads as "assigned to me" for whoever views it rather than a literal id baked in at save time. */
                filters?: string;
                search?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_update: {
        parameters: {
            query?: never;
            header: {
                "x-lock-session-id": string;
                "x-expected-updated-at": string;
            };
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_createRelated: {
        parameters: {
            query: {
                referenceFieldId: string;
                parentModelId: string;
                parentRecordId: string;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_movePreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_move: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_bulk: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_importFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordsController_removeMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_undoDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_purgeNow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_purgeMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordsController_listHistory: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
            };
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    RecordsController_restoreVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
                historyId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordLocksController_acquire: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordLocksController_release: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLocksController_releaseBeacon: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspacePropertiesController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspacePropertiesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkspacePropertyDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspacePropertiesController_reorder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    WorkspacePropertiesController_getValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspacePropertiesController_setValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspacePropertiesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspacePropertiesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWorkspacePropertyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    VendorInboundWebhookIntakeController_intake: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceDomainsController_list: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceDomainsController_claim: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClaimWorkspaceDomainDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceDomainsController_check: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceDomainsController_manualVerify: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceDomainsController_remove: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    OrganizationsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_listMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_addMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOrganizationMembershipDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_removeMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                membershipId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_updateMemberRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                membershipId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationMembershipDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_listWorkspaces: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_grantWorkspaceMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                workspaceId: string;
                identityId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GrantWorkspaceMemberDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_revokeWorkspaceMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                workspaceId: string;
                identityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_listAiKeys: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrgAiKeyResponseDto"][];
                };
            };
        };
    };
    OrganizationsController_upsertAiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertOrgAiKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrgAiKeyResponseDto"];
                };
            };
        };
    };
    OrganizationsController_removeAiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationsController_testAiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrgAiKeyResponseDto"];
                };
            };
        };
    };
    OrganizationsController_aiUsageSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrgAiUsageSummaryResponseDto"];
                };
            };
        };
    };
    RegistrationController_slugAvailable: {
        parameters: {
            query?: {
                slug?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RegistrationController_register: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RegistrationController_confirm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterConfirmDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspacesController_findAll: {
        parameters: {
            query?: {
                search?: string;
                sortBy?: string;
                sortDir?: string;
                limit?: string;
                offset?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"][];
                };
            };
        };
    };
    WorkspacesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkspaceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_createSelfServe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkspaceSelfServeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_getUsageSummary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceUsageSummaryDto"][];
                };
            };
        };
    };
    WorkspacesController_getPlatformStats: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlatformStatsDto"];
                };
            };
        };
    };
    WorkspacesController_getS3UsageSummary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceS3UsageSummaryDto"][];
                };
            };
        };
    };
    WorkspacesController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_requestDeletion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteWorkspaceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWorkspaceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_suspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SuspendWorkspaceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_unsuspend: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_moveOrganization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveWorkspaceOrganizationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_updateAppearance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWorkspaceAppearanceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceResponseDto"];
                };
            };
        };
    };
    WorkspacesController_getTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    WorkspacesController_updateTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateThemeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    WorkspacesController_getUsage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceUsageDto"];
                };
            };
        };
    };
    WorkspacesController_getS3Usage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceS3UsageDto"];
                };
            };
        };
    };
    ThemeController_getCatalog: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FontCatalogResponseDto"];
                };
            };
        };
    };
    AgentsController_provision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentsController_appendLogEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppendAgentLogEntryDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentsController_listRunLogs: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                personaId?: string;
            };
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentsController_getRunLog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentsController_appendLogCycle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                agentLogId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppendAgentLogCycleDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentApiKeysController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                agentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKeyResponseDto"][];
                };
            };
        };
    };
    AgentApiKeysController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                agentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateApiKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKeyCreatedResponseDto"];
                };
            };
        };
    };
    AgentApiKeysController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                agentId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentSkillsController_provision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    AgentSkillsController_getSkill: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ProjectsController_findAll: {
        parameters: {
            query: {
                workspaceId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectResponseDto"][];
                };
            };
        };
    };
    ProjectsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateProjectDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectResponseDto"];
                };
            };
        };
    };
    ProjectsController_findOne: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectResponseDto"];
                };
            };
        };
    };
    ProjectsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProjectsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateProjectDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectResponseDto"];
                };
            };
        };
    };
    ProjectsController_getCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ProjectsController_getTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    ProjectsController_updateTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateThemeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    ProjectsController_getTemplateProtectionSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateProtectionSummaryDto"];
                };
            };
        };
    };
    ProjectsController_detachFromTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateProtectionSummaryDto"];
                };
            };
        };
    };
    ProjectsController_uninstallPreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UninstallPreviewDto"];
                };
            };
        };
    };
    ProjectsController_uninstall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProjectsController_templateUpdatePreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateUpdatePreviewDto"];
                };
            };
        };
    };
    ProjectsController_templateUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TemplateUpdateDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_liveUpdates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ViewsController_findAll: {
        parameters: {
            query?: {
                projectId?: string;
                workspaceId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"][];
                };
            };
        };
    };
    ViewsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateViewDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_findOne: {
        parameters: {
            query?: {
                workspaceId?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateViewDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_getTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    ViewsController_updateTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateThemeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    ViewsController_move: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveViewDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ViewsController_setPublished: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetPublishedDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_setAccessPolicy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetAccessPolicyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_setPublicSlug: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegeneratePublicSlugDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewResponseDto"];
                };
            };
        };
    };
    ViewsController_addPage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePageDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewPageResponseDto"];
                };
            };
        };
    };
    ViewsController_reorderPages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderViewPagesDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_removePage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                pageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_updatePage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                pageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdatePageDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewPageResponseDto"];
                };
            };
        };
    };
    ViewsController_getDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewSubmissionDraftResponseDto"];
                };
            };
        };
    };
    ViewsController_upsertDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertDraftDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewSubmissionDraftResponseDto"];
                };
            };
        };
    };
    ViewsController_discardDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_submitDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_addComponent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateViewComponentDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewComponentResponseDto"];
                };
            };
        };
    };
    ViewsController_reorderComponents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderViewComponentsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_removeComponent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                componentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ViewsController_updateComponent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                componentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateViewComponentDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ViewComponentResponseDto"];
                };
            };
        };
    };
    ViewsController_getComponentTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                componentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    ViewsController_updateComponentTheme: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                componentId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateThemeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThemeStateResponseDto"];
                };
            };
        };
    };
    DataModelExportImportController_export: {
        parameters: {
            query?: {
                sampleRecords?: string;
                template?: string;
                contract?: string;
                includeSensitiveValues?: string;
            };
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DataModelExportImportController_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImportManifestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    DataModelExportImportController_apply: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImportManifestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FormulaFieldsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFormulaFieldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    FormulaFieldsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FormulaFieldsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateFormulaFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RelationshipsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RelationshipsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRelationshipDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkflowsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkflowsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkflowDefinitionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkflowsController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWorkflowDefinitionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkflowsController_listRuns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkflowsController_forceRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TestRunWorkflowDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowsController_testRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TestRunWorkflowDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkflowsController_clearTestRuns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TableSyncController_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    TableSyncController_setEnabled: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTableSyncDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    GoogleSheetsController_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GoogleSheetsController_connectStart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GoogleSheetsController_disconnect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GoogleSheetsController_callback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GoogleSheetsController_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinksController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinksController_mint: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MintRecordLinkDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinksController_regenerate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                linkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinksController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                linkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinkFieldsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RecordLinkFieldsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRecordLinkFieldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinkFieldsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecordLinkFieldsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRecordLinkFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceAiConfigController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceAiConfigResponseDto"];
                };
            };
        };
    };
    WorkspaceAiConfigController_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertWorkspaceAiConfigDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceAiConfigResponseDto"];
                };
            };
        };
    };
    WorkspaceAiConfigController_testAiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                provider: "ANTHROPIC" | "OPENAI" | "GOOGLE";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceAiKeyListItemDto"];
                };
            };
        };
    };
    WorkspaceAiConfigController_usageSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceAiUsageSummaryResponseDto"];
                };
            };
        };
    };
    ApiVendorCatalogController_listVendors: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    ApiVendorCatalogController_createVendor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertApiVendorDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ApiVendorCatalogController_removeVendor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiVendorCatalogController_updateVendor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertApiVendorDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ApiVendorCatalogController_createRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertApiRequestDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiVendorCatalogController_removeRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                requestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiVendorCatalogController_updateRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                requestId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertApiRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_connectStart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                vendorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_disconnect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                vendorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_setApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                vendorId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetApiKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_clearApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                vendorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_setBasicAuth: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                vendorId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetBasicAuthDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceApiConnectionsController_callback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AgentChatController_availability: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentAvailabilityResponseDto"];
                };
            };
        };
    };
    AgentChatController_chat: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AgentChatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentChatResponseDto"];
                };
            };
        };
    };
    NotificationsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_clearAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_liveUpdates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    NotificationsController_markRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_muteSource: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_unmuteSource: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PreferencesController_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PreferencesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdatePreferencesDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PreferencesController_getFavoriteGridViews: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    PreferencesController_getFavoriteViews: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PushController_getConfig: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PushConfigResponseDto"];
                };
            };
        };
    };
    PushController_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PushSubscriptionResponseDto"][];
                };
            };
        };
    };
    PushController_subscribe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubscribePushDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PushController_unsubscribe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UnsubscribePushDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PushController_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ButtonFieldsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ButtonFieldsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateButtonFieldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ButtonFieldsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ButtonFieldsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateButtonFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ButtonFieldsController_resolveAgentChatMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TriggerAgentButtonActionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ButtonFieldsController_runAgent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TriggerAgentButtonActionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ButtonFieldsController_runScript: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TriggerAgentButtonActionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    LookupFieldsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    LookupFieldsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateLookupFieldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    LookupFieldsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LookupFieldsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateLookupFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RollupFieldsController_findIncomingReferences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RollupFieldsController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RollupFieldsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRollupFieldDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RollupFieldsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RollupFieldsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRollupFieldDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspaceFormulasController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    WorkspaceFormulasController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkspaceFormulaDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceFormulasController_test: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TestWorkspaceFormulaDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceFormulasController_findDependents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    WorkspaceFormulasController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceFormulasController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWorkspaceFormulaDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SsoConnectionsController_listConnections: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    SsoConnectionsController_createConnection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertSsoConnectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SsoConnectionsController_getConnection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SsoConnectionsController_removeConnection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SsoConnectionsController_updateConnection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertSsoConnectionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SsoConnectionsController_upsertBinding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertWorkspaceSsoBindingDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SsoConnectionsController_removeBinding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SsoConnectionsController_createGroupMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertSsoGroupMappingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SsoConnectionsController_removeGroupMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                mappingId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SsoConnectionsController_updateGroupMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                mappingId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertSsoGroupMappingDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    RelayInternalController_resolve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResolveShipsByPublicKeyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    RelayInternalController_markConnected: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                shipId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MarkShipConnectedDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RelayInternalController_markDisconnected: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                shipId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedGridViewsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedGridViewsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateSavedGridViewDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SavedGridViewsController_duplicate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SavedGridViewsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedGridViewsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSavedGridViewDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SavedChartVisualizationsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                gridViewId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedChartVisualizationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                gridViewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateSavedChartVisualizationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedChartVisualizationsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                gridViewId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SavedChartVisualizationsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                gridViewId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSavedChartVisualizationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ExportController_export: {
        parameters: {
            query?: {
                columns?: unknown;
                delimiter?: unknown;
                includeHeader?: unknown;
                search?: unknown;
                filters?: unknown;
                recordIds?: unknown;
                format?: unknown;
            };
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ImportController_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ImportController_listForModel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    ImportController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateImportJobDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ImportController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataModelId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    WorkspaceExportJobController_request: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceExportJobResponseDto"];
                };
            };
        };
    };
    WorkspaceExportJobController_latest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceExportJobResponseDto"];
                };
            };
        };
    };
    WorkspaceExportJobController_download: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewsController_getView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewsController_liveUpdates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicViewDataController_fieldAccess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDataController_list: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                cursor?: string;
                filters?: string;
                search?: string;
                sort?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    PublicViewDataController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicViewDataController_query: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    PublicViewDataController_aggregate: {
        parameters: {
            query?: {
                columnName?: string;
                op?: string;
                filters?: string;
                search?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDataController_groupAggregate: {
        parameters: {
            query?: {
                groupBy?: string;
                metrics?: string;
                filters?: string;
                search?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDataController_pathChildren: {
        parameters: {
            query?: {
                pathColumn?: string;
                prefix?: string;
                filters?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDataController_myRecord: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicViewDataController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicViewDataController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicViewDraftsController_getDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDraftsController_upsertDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertDraftDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDraftsController_discardDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewDraftsController_submitDraft: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewFilesController_upload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    fieldTypeId?: string;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicViewFilesController_download: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkController_getView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkController_liveUpdates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicRecordLinkDataController_fieldAccess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkDataController_list: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                cursor?: string;
                filters?: string;
                search?: string;
                sort?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    PublicRecordLinkDataController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicRecordLinkDataController_query: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>[];
                };
            };
        };
    };
    PublicRecordLinkDataController_aggregate: {
        parameters: {
            query?: {
                columnName?: string;
                op?: string;
                filters?: string;
                search?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkDataController_groupAggregate: {
        parameters: {
            query?: {
                groupBy?: string;
                metrics?: string;
                filters?: string;
                search?: string;
            };
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkDataController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                dataModelId: string;
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    PublicRecordLinkFilesController_upload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    fieldTypeId?: string;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicRecordLinkFilesController_download: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
                token: string;
                uuid: string;
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicResponderAccessController_request: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicResponderAccessController_verify: {
        parameters: {
            query?: {
                token?: unknown;
            };
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicPendingCreationController_request: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PublicPendingCreationController_verify: {
        parameters: {
            query?: {
                token?: unknown;
            };
            header?: never;
            path: {
                publicSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ResponderGoogleOAuthController_start: {
        parameters: {
            query?: {
                publicSlug?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ResponderGoogleOAuthController_callback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LibraryController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LibraryController_publish: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublishLibraryTemplateDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LibraryController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LibraryController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LibraryController_installPreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    LibraryController_install: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstallLibraryTemplateDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_validateTable: {
        parameters: {
            query: {
                targetDataModelId: string;
                targetFormViewId?: string;
            };
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    SlackController_connectStart: {
        parameters: {
            query?: {
                targetFormViewId?: unknown;
                targetDataModelId?: unknown;
            };
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_replaceTargetTables: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReplaceSlackTargetTablesDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_disconnect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_pendingInstall: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_completeInstall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CompleteSlackInstallDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_callback: {
        parameters: {
            query?: {
                state?: unknown;
                code?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_command: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_interactions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SlackController_events: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TableCreationController_inferFromUrl: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    TableCreationController_inferFromFile: {
        parameters: {
            query?: {
                workspaceId?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    TableCreationController_fromUrl: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTableFromUrlDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    TableCreationController_fromFile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTableFromFileDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
}
