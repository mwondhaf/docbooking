export const doctors = [
  {
    id: 1,
    name: "Dr. Deus",
    availability: [
      {
        day: "Mon",
        onDuty: "07:00",
        hours: [
          {
            hour: "07:00",
            available: true,
          },
          {
            hour: "08:00",
            available: true,
          },
          {
            hour: "09:00",
            available: true,
          },
          {
            hour: "10:00",
            available: true,
          },
          {
            hour: "20:00",
            available: false,
          },
          {
            hour: "21:00",
            available: false,
          },
          {
            hour: "22:00",
            available: false,
          },
          {
            hour: "23:00",
            available: false,
          },
          {
            hour: "00:00",
            available: false,
          },
          {
            hour: "01:00",
            available: false,
          },
          {
            hour: "02:00",
            available: false,
          },
          {
            hour: "03:00",
            available: false,
          },
          {
            hour: "04:00",
            available: false,
          },
          {
            hour: "05:00",
            available: false,
          },
          {
            hour: "06:00",
            available: false,
          },
        ],
      },
      {
        day: "Tue",
        onDuty: "08:00",
        offDuty: null,
        hours: [
          {
            hour: "07:00",
            available: true,
          },
          {
            hour: "08:00",
            available: true,
          },
          {
            hour: "08:56",
            available: true,
          },
          {
            hour: "09:00",
            available: true,
          },
          {
            hour: "10:00",
            available: false,
          },
          {
            hour: "00:00",
            available: true,
          },
        ],
      },
      {
        day: "Wed",
        onDuty: "09:00",
        offDuty: "17:00",
        hours: [
          {
            hour: "07:00",
            available: true,
          },
          {
            hour: "08:00",
            available: true,
          },
        ],
      },
      {
        day: "Thu",
        onDuty: "09:00",
        offDuty: "17:00",
        hours: [
          {
            hour: "08:00",
            available: true,
          },
          {
            hour: "18:00",
            available: false,
          },
        ],
      },
      {
        day: "Fri",
        onDuty: "09:00",
        offDuty: "17:00",
        hours: [
          {
            hour: "08:00",
            available: true,
          },
          {
            hour: "12:00",
            available: false,
          },
        ],
      },
      {
        day: "Sat",
        onDuty: null,
        offDuty: "18:00",
        hours: [
          {
            hour: "12:00",
            available: true,
          },
        ],
      },
      {
        day: "Sun",
        onDuty: null,
        offDuty: null,
      },
    ],
  },
  {
    id: 2,
    name: "Dr. John Doe",
    availability: [
      {
        day: "Mon",
        onDuty: "08:00",
        offDuty: "17:00",
        hours: [
          {
            hour: "08:00",
            available: true,
          },
        ],
      },
      {
        day: "Tue",
        onDuty: "08:00",
        hours: [
          {
            hour: "08:00",
            available: true,
          },
          {
            hour: "09:00",
            available: true,
          },
          {
            hour: "10:00",
            available: true,
          },
        ],
      },
      {
        day: "Wed",
        onDuty: null,
      },
      {
        day: "Thu",
        onDuty: null,
      },
      {
        day: "Fri",
        onDuty: null,
      },
      {
        day: "Sat",
        onDuty: null,
      },
      {
        day: "Sun",
        onDuty: null,
      },
    ],
  },
];
