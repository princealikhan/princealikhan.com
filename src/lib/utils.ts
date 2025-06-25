import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const BLUR_FADE_DELAY = 0.04;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

// async function forceDownload(link: string, filename: string) {
//   const headers = new Headers();
//   const requestOptions: any = {
//     method: "GET",
//     headers,
//     redirect: "follow",
//   };

//   const response = await fetch(link, requestOptions);
//   const blob = await response.blob();
//   const mimeType: any = response.headers.get("content-type");

//   const file = new File([blob], filename, { type: mimeType });
//   saveAs(file);
// }