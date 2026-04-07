export function goToDonatePage(event, options = {}) {
  event?.preventDefault?.();

  const params = new URLSearchParams();

  if (options.source) params.set("source", options.source);
  if (options.campaign) params.set("campaign", options.campaign);
  if (options.label) params.set("label", options.label);
  if (options.amount) params.set("amount", String(options.amount));

  const query = params.toString();
  const target = query ? `/donate?${query}` : "/donate";

  window.location.assign(target);
}