import { describe, expect, it, vi } from 'vitest'
import { notifyOfflineReady, promptForPwaUpdate } from './pwa'

describe('avisos de la PWA', () => {
  it('solicita al service worker aplicar la actualización aceptada', () => {
    const updateSW = vi.fn().mockResolvedValue(undefined)
    promptForPwaUpdate(updateSW, () => true)
    expect(updateSW).toHaveBeenCalledOnce()
  })

  it('no actualiza si el usuario cancela', () => {
    const updateSW = vi.fn().mockResolvedValue(undefined)
    promptForPwaUpdate(updateSW, () => false)
    expect(updateSW).not.toHaveBeenCalled()
  })

  it('informa cuando la aplicación está disponible sin conexión', () => {
    const notify = vi.fn()
    notifyOfflineReady(notify)
    expect(notify).toHaveBeenCalledWith('La aplicación quedó preparada para funcionar sin conexión.')
  })
})
