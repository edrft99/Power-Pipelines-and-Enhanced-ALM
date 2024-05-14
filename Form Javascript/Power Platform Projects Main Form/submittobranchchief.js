function onChange(context) {
  let attribute = context.getEventSource();
  let value = attribute.getValue();
  let formContext = context.getFormContext();

  if (value != null) {
    Xrm.Navigation.openAlertDialog({ text: "Request has been submitted!" });
    // Set the value of the team lead approval button to Resubmit
    attribute.setValue("Submitted");
  }
}
