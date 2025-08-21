export const returnMoney = (amount: number) => {
  return new Intl.NumberFormat('en-uk', {
    style: 'currency',
    currency: 'GBP',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}
export const returnFullMoney = (amount: number) => {
  return new Intl.NumberFormat('en-uk', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount)
}

export const returnCompactNumber = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
  }).format(amount)
}

export const returnCommaSepertatedNumber = (amount: number) => {
  if (amount != 0) return new Intl.NumberFormat().format(amount)
  return '0'
}

export const returnDistanceInKm = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'kilometer',
    maximumFractionDigits: 2,
  }).format(amount / 1000)
}

export const convertBytesToKbOrMb = (bytes: number) => {
  if (bytes < 1024) {
    // If bytes are less than 1KB, return the size in bytes
    return bytes + ' bytes'
  } else if (bytes < 1024 * 1024) {
    // If bytes are less than 1MB, return the size in KB
    return (bytes / 1024).toFixed(2) + ' KB'
  } else {
    // If bytes are greater than or equal to 1MB, return the size in MB
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }
}

export const getFormattedCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}
export const getFullMoney = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount)
}

export const getFormattedAmount = (amount: number | undefined) => {
  return amount
    ? new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      }).format(amount)
    : null
}

export const getCommaSepertatedNumber = (
  amount: number | string | undefined,
  toFixed?: number,
) => {
  if (amount) {
    if (typeof amount == 'string') {
      return toFixed
        ? new Intl.NumberFormat().format(
            Number(Number(amount).toFixed(toFixed)),
          )
        : new Intl.NumberFormat().format(Number(amount))
    } else {
      return toFixed
        ? new Intl.NumberFormat().format(Number(amount.toFixed(toFixed)))
        : new Intl.NumberFormat().format(amount)
    }
  }
  return toFixed ? '0.00' : '0'
}
