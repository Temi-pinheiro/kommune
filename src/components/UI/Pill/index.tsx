export const Pill = ({
  status,
  label,
}: {
  status: string | undefined | null
  label?: string
}) => {
  let bg, color, border
  switch (status?.toLowerCase()) {
    case 'open':
      bg = '#F8F8F8'
      color = '#121212'
      border = '#12121200'

      break
    case 'rejected':
    case 'blocked':
      bg = '#DF1C41'

      break

    case 'completed':
      bg = '#EFFBE4'
      color = '#455E2F'
      border = '#DEF7C8'

      break
    case 'pending':
    case 'submitted and pending approval':
    case 'ongoing':
      bg = '#F17B2C'

      break

    case 'assigned':
      bg = '#E4EEFB'
      color = '#10557A'
      border = '#7FCCF5'

      break
    default:
      bg = '#000'
  }
  return (
    <span
      style={{
        color,
        backgroundColor: bg,
        borderColor: border,
      }}
      className={` p-[6px] text-xs capitalize rounded-[8px] flex items-center gap-x-2 w-fit font-medium border leading-[120%]`}
    >
      {label || status}
    </span>
  )
}
