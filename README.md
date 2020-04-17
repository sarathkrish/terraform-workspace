# Terraform Workspace action

This action create Terraform Workspace using Terraform API  
https://app.terraform.io/api/v2/organizations/YourOrganization/workspaces"  
API reference: https://www.terraform.io/docs/cloud/api/workspaces.html  

## Inputs

### `workSpaceName`

**Required** The name of the workspace.

### `organizationName`

**Required** Your Organization.

### `terraformToken`

**Required** Your Terraform token. Please use secret to store your Terraform token.

## Outputs

### `workSpaceId`

 The workspaceId for the workspace created.

## Example usage

uses: sarathkrish/terraform-workspace@pre-release6  
with:  
&nbsp;workSpaceName: MyTestWorkspace  
&nbsp;organizationName: env.organization  
&nbsp;terraformToken: secrets.Terraform_Token  