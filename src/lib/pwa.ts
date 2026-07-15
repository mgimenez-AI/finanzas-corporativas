export type UpdateServiceWorker = (reloadPage?: boolean) => Promise<void>

export function promptForPwaUpdate(
  updateSW: UpdateServiceWorker,
  ask: (message: string) => boolean = window.confirm,
) {
  if (ask('Hay una versión nueva disponible. ¿Actualizar ahora?')) void updateSW()
}

export function notifyOfflineReady(
  notify: (message: string) => void = window.alert,
) {
  notify('La aplicación quedó preparada para funcionar sin conexión.')
}
