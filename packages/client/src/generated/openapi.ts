/* eslint-disable */
// Generated from http://localhost:3000/api/docs-json by scripts/generate-types.ts — do not hand-edit.
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
    "/api/workspaces/{workspaceId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RolesController_findAll"];
        put?: never;
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
        delete?: never;
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
    "/api/workspaces/{workspaceId}/roles/{id}/capabilities/{capability}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
    "/api/workspaces/{workspaceId}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["FilesController_upload"];
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
        get: operations["FilesController_download"];
        put?: never;
        post?: never;
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
        get: operations["WorkspacesController_findAll"];
        put?: never;
        post: operations["WorkspacesController_create"];
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
        get: operations["WorkspacesController_findOne"];
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
    "/api/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
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
        delete?: never;
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
    "/api/data-models/{id}/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DataModelsController_addField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
    "/api/data-models/{dataModelId}/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RecordsController_list"];
        put?: never;
        post: operations["RecordsController_create"];
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
        get: operations["RecordsController_aggregate"];
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
        patch: operations["RecordsController_update"];
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
    "/api/data-models/{dataModelId}/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RelationshipsController_findAll"];
        put?: never;
        post: operations["RelationshipsController_create"];
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
    "/api/data-models/{dataModelId}/derived-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DerivedFieldsController_findAll"];
        put?: never;
        post: operations["DerivedFieldsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/data-models/{dataModelId}/derived-fields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DerivedFieldsController_remove"];
        options?: never;
        head?: never;
        patch: operations["DerivedFieldsController_update"];
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
            name?: string | null;
        };
        UpdateAvatarDto: {
            storageKey?: string | null;
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
            password: string;
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
        CreateRoleDto: {
            name: string;
            description?: string;
            /** @enum {string} */
            defaultAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** @enum {string} */
            defaultViewAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        UpdateRoleDto: {
            name?: string;
            description?: string;
            /** @enum {string} */
            defaultAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
            /** @enum {string} */
            defaultViewAccess?: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetModelGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetFieldGrantDto: {
            /** @enum {string} */
            access: "DELETE" | "NONE" | "READ" | "WRITE";
        };
        SetViewGrantDto: {
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
        CreateWorkspaceDto: {
            name: string;
            slug: string;
        };
        WorkspaceResponseDto: {
            id: string;
            slug: string;
            name: string;
            schemaName: string;
            /** @enum {string} */
            status: "ACTIVE" | "SUSPENDED";
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        CreateFieldTypePropertyDto: {
            name: string;
            label: string;
            /** Format: uuid */
            propertyTypeId: string;
            isRequired?: boolean;
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
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE";
            /** @enum {string} */
            baseType?: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            properties?: components["schemas"]["CreateFieldTypePropertyDto"][];
            /** Format: uuid */
            targetModelId?: string;
            /** @enum {string} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL";
            isMultiple?: boolean;
            /** @enum {string} */
            textFormat?: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
            decimalPlaces?: number;
            allowedFileTypes?: string[];
            maxFileSizeBytes?: number;
            minWidthPx?: number;
            maxWidthPx?: number;
            minHeightPx?: number;
            maxHeightPx?: number;
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
            properties?: components["schemas"]["UpdateFieldTypePropertyDto"][];
            confirmStructuredPropertyChange?: boolean;
            validationRules?: components["schemas"]["CreateFieldValidationRuleDto"][];
            transformationRules?: components["schemas"]["CreateFieldTransformationRuleDto"][];
            /** @enum {string} */
            textFormat?: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat?: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig?: {
                [key: string]: unknown;
            };
            decimalPlaces?: number | null;
            allowedFileTypes?: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
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
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        CreateDataFieldDto: {
            name: string;
            columnName?: string;
            description?: string;
            /** Format: uuid */
            fieldTypeId: string;
            isRequired?: boolean;
            isUnique?: boolean;
        };
        CreateDataModelDto: {
            /** Format: uuid */
            projectId?: string;
            /** Format: uuid */
            workspaceId?: string;
            name: string;
            fields?: components["schemas"]["CreateDataFieldDto"][];
        };
        FieldTypeSummaryResponseDto: {
            id: string;
            workspaceId: string;
            name: string;
            description?: string | null;
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE";
            /** @enum {string} */
            baseType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            isSystem: boolean;
            targetModelId?: string | null;
            /** @enum {string|null} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL" | null;
            isMultiple: boolean;
            /** @enum {string} */
            textFormat: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig: {
                [key: string]: unknown;
            };
            decimalPlaces?: number | null;
            allowedFileTypes: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
        };
        FieldTypePropertyResponseDto: {
            id: string;
            name: string;
            label: string;
            isRequired: boolean;
            position: number;
            propertyType: components["schemas"]["FieldTypeSummaryResponseDto"];
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
            createdById?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            defaultFormComponentId?: string | null;
            fields?: components["schemas"]["DataFieldResponseDto"][];
        };
        FieldTypeResponseDto: {
            id: string;
            workspaceId: string;
            name: string;
            description?: string | null;
            /** @enum {string} */
            kind: "PRIMITIVE" | "STRUCTURED" | "REFERENCE";
            /** @enum {string} */
            baseType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            isSystem: boolean;
            targetModelId?: string | null;
            /** @enum {string|null} */
            onDelete?: "RESTRICT" | "CASCADE" | "SET_NULL" | null;
            isMultiple: boolean;
            /** @enum {string} */
            textFormat: "PLAIN" | "MARKDOWN" | "HTML";
            /** @enum {string} */
            numberFormat: "PLAIN" | "RATING" | "DURATION" | "CURRENCY" | "UNIT";
            numberFormatConfig: {
                [key: string]: unknown;
            };
            decimalPlaces?: number | null;
            allowedFileTypes: string[];
            maxFileSizeBytes?: number | null;
            minWidthPx?: number | null;
            maxWidthPx?: number | null;
            minHeightPx?: number | null;
            maxHeightPx?: number | null;
            properties?: components["schemas"]["FieldTypePropertyResponseDto"][];
            targetModel?: components["schemas"]["DataModelSummaryResponseDto"] | null;
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
        DerivedFieldResponseDto: {
            id: string;
            dataModelId: string;
            name: string;
            columnName: string;
            /** @enum {string} */
            resultType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            formula: string;
            decimalPlaces?: number | null;
            fieldTypeId?: string | null;
            position: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            fieldType?: components["schemas"]["FieldTypeResponseDto"] | null;
        };
        ViewComponentFilterResponseDto: {
            id: string;
            viewComponentId: string;
            position: number;
        };
        DefaultFormComponentResponseDto: {
            id: string;
            /** @enum {string} */
            type: "FORM" | "GRID" | "TREE" | "GRAPH" | "TEXT" | "KPI" | "CHART";
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
            createdById?: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            defaultFormComponentId?: string | null;
            fields: components["schemas"]["DataFieldResponseDto"][];
            keys?: components["schemas"]["DataModelKeyResponseDto"][];
            relationshipsFromHere?: components["schemas"]["RelationshipResponseDto"][];
            derivedFields?: components["schemas"]["DerivedFieldResponseDto"][];
            defaultFormComponent?: components["schemas"]["DefaultFormComponentResponseDto"] | null;
        };
        DataModelAccessResponseDto: {
            /** @enum {string} */
            access: "NONE" | "READ" | "WRITE" | "DELETE";
        };
        UpdateDataModelDto: {
            displayColumnName?: string | null;
            color?: string | null;
            icon?: string | null;
            versioningEnabled?: boolean;
            defaultFormComponentId?: string | null;
        };
        UpdateDataFieldDto: {
            name?: string;
            columnName?: string;
            description?: string;
            /** Format: uuid */
            fieldTypeId?: string;
            isRequired?: boolean;
            isUnique?: boolean;
            confirmLossyChange?: boolean;
        };
        CreateDataModelKeyDto: {
            name: string;
            fieldIds: string[];
        };
        RecordsAggregateResponseDto: {
            value: number | null;
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
            /** @enum {string} */
            type: "FORM" | "GRID" | "TREE" | "GRAPH" | "TEXT" | "KPI" | "CHART";
            name: string;
            dataModelId?: string | null;
            config: {
                [key: string]: unknown;
            };
            layout: {
                [key: string]: unknown;
            };
            position: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            filters: components["schemas"]["ViewComponentFilterResponseDto"][];
            dataModel?: components["schemas"]["DataModelResponseDto"] | null;
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
            components: components["schemas"]["ViewComponentResponseDto"][];
        };
        UpdateViewDto: {
            color?: string | null;
            icon?: string | null;
        };
        ViewComponentFilterDto: {
            columnName: string;
            /** @enum {string} */
            operator: "EQ" | "NEQ" | "GT" | "GTE" | "LT" | "LTE" | "CONTAINS" | "IS_NULL" | "IS_NOT_NULL";
            /** @enum {string} */
            valueSource?: "STATIC" | "COMPONENT_SELECTION";
            value?: Record<string, never>;
        };
        CreateViewComponentDto: {
            /** @enum {string} */
            type: "TEXT" | "FORM" | "GRID" | "TREE" | "GRAPH" | "KPI" | "CHART";
            name: string;
            /** Format: uuid */
            dataModelId?: string;
            config?: {
                [key: string]: unknown;
            };
            layout?: {
                [key: string]: unknown;
            };
            filters?: components["schemas"]["ViewComponentFilterDto"][];
        };
        ReorderViewComponentsDto: {
            componentIds: string[];
        };
        UpdateViewComponentDto: {
            name?: string;
            /** Format: uuid */
            dataModelId?: string;
            config?: {
                [key: string]: unknown;
            };
            layout?: {
                [key: string]: unknown;
            };
            filters?: components["schemas"]["ViewComponentFilterDto"][];
        };
        CreateDerivedFieldDto: {
            name: string;
            columnName?: string;
            /** @enum {string} */
            resultType: "STRING" | "TEXT" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATE" | "DATETIME" | "JSON" | "UUID" | "FILE";
            formula: string;
            decimalPlaces?: number;
            /** Format: uuid */
            fieldTypeId?: string;
        };
        UpdateDerivedFieldDto: {
            name?: string;
            columnName?: string;
            formula?: string;
            decimalPlaces?: number | null;
            /** Format: uuid */
            fieldTypeId?: string | null;
        };
        CreateWorkspaceFormulaDto: {
            name: string;
            description?: string;
            parameters: string[];
            expression: string;
        };
        UpdateWorkspaceFormulaDto: {
            name?: string;
            description?: string;
            parameters?: string[];
            expression?: string;
            confirmBreakingChange?: boolean;
        };
        CreateSavedGridViewDto: {
            name: string;
            config: {
                [key: string]: unknown;
            };
        };
        UpdateSavedGridViewDto: {
            name?: string;
            config?: {
                [key: string]: unknown;
            };
        };
        UpdatePreferencesDto: {
            patch: {
                [key: string]: unknown;
            };
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
                content?: never;
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
    RolesController_setCapability: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
                id: string;
                capability: "MANAGE_VIEWS" | "MANAGE_DATA_MODELS";
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
                content: {
                    "application/json": Record<string, never>;
                };
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
    FilesController_upload: {
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
    FilesController_download: {
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
    WorkspacesController_findAll: {
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
    FieldTypesController_update: {
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
    ProjectsController_findAll: {
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
    DataModelsController_findAll: {
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
    RecordsController_list: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
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
    RecordsController_aggregate: {
        parameters: {
            query?: {
                columnName?: string;
                op?: string;
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
                    "application/json": components["schemas"]["RecordsAggregateResponseDto"];
                };
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
    ViewsController_findAll: {
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
    DerivedFieldsController_findAll: {
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
    DerivedFieldsController_create: {
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
                "application/json": components["schemas"]["CreateDerivedFieldDto"];
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
    DerivedFieldsController_remove: {
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
    DerivedFieldsController_update: {
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
                "application/json": components["schemas"]["UpdateDerivedFieldDto"];
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
                content?: never;
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
}
