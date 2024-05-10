using Microsoft.Xrm.Sdk;
using System;

namespace Plugins
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    public class UpdateNamePlugin : PluginBase
    {
        public UpdateNamePlugin(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(UpdateNamePlugin))
        {
            // TODO: Implement your custom configuration handling
            // https://docs.microsoft.com/powerapps/developer/common-data-service/register-plug-in#set-configuration-data
        }

        // Entry point for custom business logic execution
        protected override void ExecuteDataversePlugin(ILocalPluginContext localPluginContext)
{
    if (localPluginContext == null)
    {
        throw new ArgumentNullException(nameof(localPluginContext));
    }

    var context = localPluginContext.PluginExecutionContext;

    // Check if the plugin is triggered by the Create message
    if (context.MessageName.ToLower() != "create")
    {
        return;
    }

    // Check for the entity on which the plugin would be registered
    if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
    {
        var entity = (Entity)context.InputParameters["Target"];

        // Check for entity name on which this plugin would be registered
        if (entity.LogicalName == "andy_powerplatformprojectapprovers")
        {
            // Retrieve the andy_POC lookup field
            var andy_POC = entity.GetAttributeValue<EntityReference>("aaduser");

            if (andy_POC != null)
            {
                // Retrieve the andy_POC entity
                var pocEntity = localPluginContext.OrganizationService.Retrieve(andy_POC.LogicalName, andy_POC.Id, new ColumnSet("displayname"));

                // Set the andy_approvername field to the displayname of the andy_POC entity
                entity["andy_approvername"] = pocEntity.GetAttributeValue<string>("displayname");

                // Update the entity
                localPluginContext.OrganizationService.Update(entity);
            }
        }
    }
}
    }
}
