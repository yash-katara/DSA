const data = [
  {
    _id: "67a053c4045b88192dbe1740",
    contest_parent: {
      _id: "67a053c4045b88192dbe173c",
      competition_id: "12161756",
      name: "Fortune Barishal v Chittagong Kings",
      competition_name: "Bangladesh Premier League",
    },
    name: "IS THERE WILL BE A TIE ?",
    market_name: "Tied Match",
    market_id: "1.238929330",
    competition_id: "12161756",
    isQuestionType: "manual",
    event_id: "33988679",
    sportId: 4,
    start_date: "2025-02-01T12:30:00.000Z",
    end_date: "2025-02-02T12:30:00.000Z",
    description: "IS THERE WILL BE A TIE ?",
    options: [
      {
        selectionId: 37302,
        selectionName: "Yes",
        market_name: "Tied Match",
        result: "Pending",
        votes: 0,
      },
      {
        selectionId: 37303,
        selectionName: "No",
        market_name: "Tied Match",
        result: "Pending",
        votes: 0,
      },
    ],
    total_votes: 0,
    teams: ["36846147", "6119244"],
    status: "Pending",
    type: "Tournament",
    createdAt: "2025-02-03T05:27:32.194Z",
    updatedAt: "2025-02-03T10:38:20.663Z",
    __v: 0,
  },
  {
    _id: "67a058e0045b88192dbe18c2",
    contest_parent: {
      _id: "67a058e0045b88192dbe18c0",
      competition_id: "12162210",
      name: "Wellington Blaze Women v Northern Brave Women",
      competition_name: "Womens Super Smash T20",
    },
    name: "WHO WILL WIN THE MATCH ?",
    market_name: "Match Odds",
    market_id: "1.238922005",
    competition_id: "12162210",
    isQuestionType: "manual",
    event_id: "33988390",
    sportId: 4,
    start_date: "2025-01-31T23:40:00.000Z",
    end_date: "2025-02-01T23:40:00.000Z",
    description: "WHO WILL WIN THE MATCH ?",
    options: [
      {
        selectionId: 64684837,
        selectionName: "Wellington Blaze Women",
        market_name: "Match Odds",
        result: "Pending",
        votes: 0,
      },
      {
        selectionId: 41909488,
        selectionName: "Northern Brave Women",
        market_name: "Match Odds",
        result: "Pending",
        votes: 0,
      },
    ],
    total_votes: 0,
    teams: ["64684837", "41909488"],
    status: "Active",
    type: "Series",
    createdAt: "2025-02-03T05:49:20.764Z",
    updatedAt: "2025-02-03T05:49:20.764Z",
    __v: 0,
  },
  {
    _id: "67a058e0045b88192dbe18c3",
    contest_parent: {
      _id: "67a058e0045b88192dbe18c0",
      competition_id: "12162210",
      name: "Wellington Blaze Women v Northern Brave Women",
      competition_name: "Womens Super Smash T20",
    },
    name: "IS THERE WILL BE A TIE ?",
    market_name: "Tied Match",
    market_id: "1.238922006",
    competition_id: "12162210",
    isQuestionType: "manual",
    event_id: "33988390",
    sportId: 4,
    start_date: "2025-01-31T23:40:00.000Z",
    end_date: "2025-02-01T23:40:00.000Z",
    description: "IS THERE WILL BE A TIE ?",
    options: [
      {
        selectionId: 37302,
        selectionName: "Yes",
        market_name: "Tied Match",
        result: "Pending",
        votes: 0,
      },
      {
        selectionId: 37303,
        selectionName: "No",
        market_name: "Tied Match",
        result: "Pending",
        votes: 0,
      },
    ],
    total_votes: 0,
    teams: ["64684837", "41909488"],
    status: "Active",
    type: "Series",
    createdAt: "2025-02-03T05:49:20.764Z",
    updatedAt: "2025-02-03T05:49:20.764Z",
    __v: 0,
  },
];





// const groupedData = {};

// data.forEach(item => {
//     const status = item.status;

//     if (!groupedData[status]) {
//         groupedData[status] = [];
//     }

//     groupedData[status].push(item);
// });

// console.log(groupedData);


const allStatuses = new Set(data.map((item) => item.status));

const groupedData = data.reduce((acc, item) => {
  const status = item.status;
  if (!acc[status]) {
    acc[status] = [];
  }
  acc[status].push(item);
  return acc;
}, {});

const finalData = {};
allStatuses.forEach((status) => {
  finalData[status] = groupedData[status] || [];
});

["Pending", "Inactive", "Completed"].forEach((status) => {
  if (!(status in finalData)) {
    finalData[status] = [];
  }
});

console.log(finalData);
