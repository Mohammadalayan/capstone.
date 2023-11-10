import { useEffect, useState } from 'react';
import './App.css';
import Main from './main';
import React from "react";
import Reserve from './reserve';

// Assume fetchAPI and submitAPI are defined elsewhere or imported from another file
export const fetchAPI = async (selectedDate) => {
  if (selectedDate === "2023-11-11") {
    return ["19:00", "20:00", "21:00", "22:00"];
} else if (selectedDate === "2023-11-12") {
    return ["17:00", "19:00", "20:00"];
} else if (selectedDate === "2023-11-13") {
    return ["17:00", "20:00", "22:00"];
} else if (selectedDate === "2023-11-14") {
    return ["18:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-15") {
    return ["17:00", "18:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-16") {
    return ["19:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-17") {
    return ["17:00", "18:00", "19:00", "21:00", "22:00"];
} else if (selectedDate === "2023-11-18") {
    return ["18:00", "19:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-19") {
    return ["17:00", "19:00", "22:00"];
} else if (selectedDate === "2023-11-20") {
    return ["18:00", "19:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-21") {
    return ["17:00", "19:00", "22:00"];
} else if (selectedDate === "2023-09-22") {
    return ["18:00", "19:00", "20:00", "21:00", "22:00"];
} else if (selectedDate === "2023-11-23") {
    return ["15:00", "15:30", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30"];
} else if (selectedDate === "2023-11-24") {
    return ["16:00", "17:30", "18:30", "19:30", "20:30", "21:30"];
} else if (selectedDate === "2023-11-25") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-26") {
    return ["16:30", "17:30", "18:30", "19:30", "20:30"];
} else if (selectedDate === "2023-11-27") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
} else if (selectedDate === "2023-11-28") {
    return ["18:00", "19:00", "20:00", "21:00", "22:00"];
} else if (selectedDate === "2023-11-29") {
    return ["15:30", "16:30", "17:30", "18:30", "19:30", "20:30"];
} else if (selectedDate === "2023-11-30") {
    return ["16:00", "17:00", "18:00", "19:00", "20:00"];
} else {
    return ["15:00", "15:30", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30"];
}

};

  
export const submitAPI = async (selectedDate, api) => {
  if (api && api.availableTime && api.availableTime.includes(selectedDate)) {
    return true;
  } else {
    return false;
  }
};

function Api() {
  const [api, setApi] = useState({ availableTime: [] });
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchAPI(selectedDate);
        setApi({ availableTime: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAsync();
  }, [selectedDate]);

  const isSubmitted = submitAPI(selectedDate, api);

  return (
    <Reserve
      availableTime={api.availableTime}
      selectedDate={selectedDate}
      updateSelectedDate={setSelectedDate}
      isSubmitted={isSubmitted}
    />
  );
}

export default Api;
