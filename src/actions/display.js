export const DISPLAY_BARCODE = 'DISPLAY_BARCODE'

export function displayBarcode() {
  console.log('Action')
  return {
    type: 'DISPLAY_BARCODE'
  }
}