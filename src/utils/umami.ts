export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== "undefined" && (window as any).umami) {
    (window as any).umami.trackEvent(event, data)
  } else {
    console.warn("Umami is not ready, event skipped:", event, data)
  }
}
