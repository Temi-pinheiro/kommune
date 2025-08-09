import { Group } from '../Group'
import { Pill } from '../Pill'
import { useModal } from '@/providers'
import { ViewTask } from '@/actions'

export const TaskCard = ({ task }: { task: JobReq }) => {
  const open = useModal().open

  const handleClick = () => {
    // Logic to open modal with jobReq details
    open(<ViewTask jobReq={task} />)
  }
  return (
    <button
      onClick={handleClick}
      className="border rounded-xl border-[#F0F0F0] py-4 px-4 flex flex-col transition duration-500 ease-in-out hover:scale-[101%] text-left cursor-pointer"
    >
      <h3 className="font-medium text-black">{task.title}</h3>
      <div className="mt-3 flex items-end justify-between">
        <Group key="info">
          <div className="flex flex-col gap-y-2 text-sm text-[#6C726F]">
            <Group key="location">
              <span className="flex items-center gap-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.26699 3.17326C5.26053 2.19959 6.59819 1.65735 7.98928 1.66437C9.38036 1.6714 10.7125 2.22712 11.6961 3.21078C12.6798 4.19444 13.2355 5.52655 13.2425 6.91764C13.2496 8.30873 12.7073 9.64638 11.7337 10.6399L8.94299 13.4306C8.69295 13.6806 8.35387 13.821 8.00032 13.821C7.64677 13.821 7.30769 13.6806 7.05766 13.4306L4.26699 10.6399C3.27691 9.64975 2.7207 8.30684 2.7207 6.90659C2.7207 5.50634 3.27691 4.16344 4.26699 3.17326Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8.90649C9.10457 8.90649 10 8.01106 10 6.90649C10 5.80192 9.10457 4.90649 8 4.90649C6.89543 4.90649 6 5.80192 6 6.90649C6 8.01106 6.89543 8.90649 8 8.90649Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {task.location}
              </span>
            </Group>
            <Group key="budget">
              <span className="flex items-center gap-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7691 4.76933C10.1365 4.13667 9.02314 3.69733 7.9998 3.66933M7.9998 3.66933C6.78247 3.63667 5.69247 4.188 5.69247 5.692C5.69247 8.46133 10.7691 7.07667 10.7691 9.846C10.7691 11.426 9.4178 12.1047 7.9998 12.0533M7.9998 3.66933V2M5.23047 10.7693C5.8258 11.5627 6.9318 12.0147 7.9998 12.0533M7.9998 12.0533V14"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {task.budget}
              </span>
            </Group>
            <Group key="assignee">
              <span className="flex items-center gap-x-2">
                <span className="rounded-full h-6 min-xl:h-8 w-6 min-xl:w-8 overflow-clip bg-[#688E47] flex items-center justify-center">
                  {task.assignee?.avatar ? (
                    <img
                      src={task.owner.avatar}
                      alt={task.owner.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      width="16"
                      height="24"
                      viewBox="0 0 16 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.988525C9.13018 0.988525 10.235 1.32976 11.1747 1.96907C12.1144 2.60838 12.8468 3.51705 13.2793 4.58019C13.7118 5.64332 13.825 6.81316 13.6045 7.94178C13.384 9.0704 12.8398 10.1071 12.0406 10.9208C11.2415 11.7345 10.2233 12.2886 9.1148 12.5131C8.00634 12.7376 6.85739 12.6224 5.81324 12.182C4.76909 11.7416 3.87664 10.9959 3.24875 10.0391C2.62085 9.08232 2.28571 7.95744 2.28571 6.80671L2.29143 6.5542C2.35534 5.05631 2.98469 3.64136 4.04825 2.60442C5.11182 1.56748 6.52747 0.988612 8 0.988525ZM10.2857 14.9522C11.8012 14.9522 13.2547 15.5651 14.3263 16.6563C15.398 17.7474 16 19.2273 16 20.7703V21.934C16 22.5512 15.7592 23.1432 15.3305 23.5796C14.9019 24.0161 14.3205 24.2613 13.7143 24.2613H2.28571C1.67951 24.2613 1.09812 24.0161 0.66947 23.5796C0.240816 23.1432 0 22.5512 0 21.934V20.7703C0 19.2273 0.602039 17.7474 1.67368 16.6563C2.74531 15.5651 4.19876 14.9522 5.71429 14.9522H10.2857Z"
                        fill="#CEF4AD"
                      />
                    </svg>
                  )}
                </span>
                {task.assignee?.name}
              </span>
            </Group>
          </div>
        </Group>
        <Pill status={task.status} />
      </div>
    </button>
  )
}
