export const isActionAllowed = (permission: string) => {
  const role = JSON.parse(localStorage.getItem('ec_perms')!) || {
    role: { name: '' },
  }
  if (
    role?.permissions?.find(
      (perm: any) =>
        perm?.permission?.slug?.toLowerCase() == permission.toLowerCase(),
    )
  )
    return true
  return false
}
