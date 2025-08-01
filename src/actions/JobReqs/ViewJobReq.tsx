import { Button, Group } from '@/components'

export const ViewJobReq = ({
  close,
  jobReq,
}: {
  close?: () => void
  jobReq: JobReq
}) => {
  return (
    <div className="w-full flex flex-col p-6">
      <Group key="header">
        <div className="flex items-center justify-between">
          <span
            style={{
              boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
            }}
            className="flex items-center bg-white p-3 rounded-3xl gap-x-1 transition duration-400 ease-in-out stroke-black hover:stroke-[#ADEC76] cursor-pointer"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08366 16.6666C8.67414 17.4825 10.5037 17.7035 12.2427 17.2898C13.9817 16.876 15.5158 15.8548 16.5685 14.4101C17.6211 12.9654 18.1232 11.1922 17.9841 9.41009C17.8451 7.62797 17.0741 5.9541 15.8102 4.69012C14.5462 3.42614 12.8723 2.65517 11.0902 2.51614C9.30807 2.37711 7.53489 2.87916 6.09018 3.93183C4.64547 4.9845 3.62424 6.51855 3.21051 8.25755C2.79679 9.99655 3.01778 11.8261 3.83366 13.4166L2.16699 18.3333L7.08366 16.6666Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-sm block pr-1">10</span>
          </span>
          <button
            onClick={close}
            className="ml-auto transition duration-500 ease-in-out stroke-black hover:stroke-red-500 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="inherit"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Group>
      <Group key="owner info">
        <div className="mt-6 flex items-center gap-x-3">
          <span className="w-12 h-12 rounded-full overflow-clip">
            <img
              src={jobReq.owner.avatar}
              alt={jobReq.owner.name}
              className="w-full h-full object-cover"
            />
          </span>
          <div className="flex flex-col text-[#121212]">
            <h4 className="font-bold">{jobReq.owner.name}</h4>
            <span className="text-sm">Rep</span>
          </div>
        </div>
      </Group>
      <div className="min-lg:max-w-[646px] w-full flex flex-col gap-y-4 mt-4">
        <h2 className="font-bold text-2xl min-xl:text-3xl leading-[120%]">
          {jobReq.title}
        </h2>
        <p className="font-medium text-[#6C726F]">{jobReq.description}</p>
        <Group key="details">
          <div className="flex flex-col gap-y-4">
            <Group key="location">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-sm text-[#6C726F]">Location</h5>
                <span className="flex items-center gap-x-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 7.16659C13.3337 10.4953 9.64099 13.9619 8.40099 15.0326C8.28547 15.1194 8.14486 15.1664 8.00033 15.1664C7.85579 15.1664 7.71518 15.1194 7.59966 15.0326C6.35966 13.9619 2.66699 10.4953 2.66699 7.16659C2.66699 5.7521 3.2289 4.39554 4.22909 3.39535C5.22928 2.39516 6.58584 1.83325 8.00033 1.83325C9.41481 1.83325 10.7714 2.39516 11.7716 3.39535C12.7718 4.39554 13.3337 5.7521 13.3337 7.16659Z"
                      stroke="#56585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.00033 9.16659C9.10489 9.16659 10.0003 8.27115 10.0003 7.16659C10.0003 6.06202 9.10489 5.16659 8.00033 5.16659C6.89576 5.16659 6.00033 6.06202 6.00033 7.16659C6.00033 8.27115 6.89576 9.16659 8.00033 9.16659Z"
                      stroke="#56585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-bold">{jobReq.location}</span>
                </span>
              </div>
            </Group>
            <Group key="scheduled for">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-sm text-[#6C726F]">Scheduled for</h5>
                <span className="flex items-center gap-x-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33333 1.83325V4.49992M10.6667 1.83325V4.49992M2 7.16658H14M3.33333 3.16659H12.6667C13.403 3.16659 14 3.76354 14 4.49992V13.8333C14 14.5696 13.403 15.1666 12.6667 15.1666H3.33333C2.59695 15.1666 2 14.5696 2 13.8333V4.49992C2 3.76354 2.59695 3.16659 3.33333 3.16659Z"
                      stroke="#56585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-bold">{jobReq.startDate}</span>
                </span>
              </div>
            </Group>
            <Group key="budget">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-sm text-[#6C726F]">Offering</h5>
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
                      stroke="#56585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-bold">{jobReq.budget}</span>
                </span>
              </div>
            </Group>
          </div>
        </Group>
        <div
          style={{
            boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
          }}
          className="flex items-center gap-x-4 rounded-4xl p-2 bg-white mx-auto mt-6 ;
"
        >
          <Button label="Show interest" primary />
        </div>
      </div>
    </div>
  )
}
