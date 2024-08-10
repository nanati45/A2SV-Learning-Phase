"use client";
import JobPosts from "@/components/JobPosts";
import MainPage from "@/components/MainPage";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import type { JobPosting } from "../type";
import JobPost from "@/components/JobPost";
// id={"65509e9353a7667de6ef5a60"}
export default function Home() {
  return (
    <Provider store={store}>
      <JobPost id={"65509e9353a7667de6ef5a60"} />
    </Provider>
  );
}
