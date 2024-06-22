import { siteConfig } from "@/site-config";
import { type CollectionEntry, getCollection } from "astro:content";

export interface Video {
	title: string;
	type: "talk";
	publishDate: string;
	conference?: string;
	tags?: string[];
	url: string;
	draft?: boolean;
}

const videos: Video[] = [
	{
		title: "Build gen AI features powered by your data with Firebase and PostgreSQL",
		type: "talk",
		publishDate: "2024-05-16",
		conference: "Google I/O '24",
		tags: ["firebase", "ai", "postgresql", "data-connect", "genkit", "app-hosting"],
		url: "https://www.youtube.com/watch?v=D5qxlu3A9D4",
	},
	{
		title: "What does it mean to create API products at scale?",
		type: "talk",
		publishDate: "2022-05-05",
		conference: "DevX Conf '22",
		tags: ["firebase", "apis"],
		url: "https://www.youtube.com/watch?v=-6IinBFPKn4",
	},
];

/** filter out draft posts based on the environment */
export async function getAllVideos() {
	return videos.filter((v) => (import.meta.env.PROD ? !v.draft : true));
}
/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllVideoTags(vids: Video[]) {
	return vids.flatMap((v) => [...(v.tags || [])]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueVideoTags(vids: Video[]) {
	return [...new Set(getAllVideoTags(vids))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueVideoTagsWithCount(vids: Video[]): [string, number][] {
	return [
		...getAllVideoTags(vids).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
