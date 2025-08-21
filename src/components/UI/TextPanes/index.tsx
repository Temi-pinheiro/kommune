import { motion } from 'framer-motion'

export interface PanesProps {
  panes: Array<{
    id: string
    label: string
    value?: string | number
    show?: boolean
  }>
  active?: string
  handleChange: (id: any) => void
}

export const TextPanes = ({ panes, active, handleChange }: PanesProps) => {
  const visiblePanes = panes.filter((pane) => pane.show)

  return (
    <motion.div key={panes.map((pane) => pane.id).toString()}>
      {/* Dropdown for mobile */}
      <div className="lg:hidden">
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
          value={active}
          onChange={(e) => handleChange(e.target.value)}
        >
          {visiblePanes.map((pane) => (
            <option key={pane.id} value={pane.id}>
              {pane.label}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons for larger screens */}
      <ul className="hidden lg:flex gap-2 flex-wrap lg:flex-nowrap w-full items-center">
        {visiblePanes.map((pane) => (
          <li key={pane.id}>
            <motion.button
              onClick={() => handleChange(pane.id)}
              key={pane.label}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                <span
                  style={{
                    color: active === pane.id ? '#FBFBFB' : '#6C726F',
                    backgroundColor:
                      active === pane.id ? '#090C06' : '#ffffff00',
                    borderColor: active === pane.id ? '#ffffff00' : '#CBCBCB',
                  }}
                  className="transition duration-500 ease-in-out text-xs font-medium p-2 rounded-lg border [line-height:120%]"
                >
                  {pane.label}
                </span>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
