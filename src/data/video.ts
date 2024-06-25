import { siteConfig } from "@/site-config";
import { type CollectionEntry, getCollection } from "astro:content";

export interface Video {
	title: string;
	type: "talk" | "interview";
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
	{
		title: "Accelerate app development with Firebase Extensions",
		type: "talk",
		publishDate: "2019-09-26",
		conference: "Firebase Summit '19",
		tags: ["firebase"],
		url: "https://www.youtube.com/watch?v=DkXtV-XzYOQ",
	},
	{
		title: "Architecting Mobile Web Apps",
		type: "talk",
		publishDate: "2019-05-09",
		conference: "Google I/O '19",
		tags: ["web", "firebase", "performance"],
		url: "https://www.youtube.com/watch?v=NwY6jkohseg",
	},
	{
		title: "What's possible with Cloud Functions for Firebase",
		type: "talk",
		publishDate: "2017-05-18",
		conference: "Google I/O '18",
		tags: ["firebase", "serverless"],
		url: "https://www.youtube.com/watch?v=G-MBeEW92v4",
	},
	{
		title: "#MeetFirebase (Part 2)",
		type: "interview",
		publishDate: "2018-04-17",
		tags: ["firebase", "personal"],
		url: "https://www.youtube.com/watch?v=Ab6_o94xup4",
	},
	{
		title: "#MeetFirebase (Part 1)",
		type: "interview",
		publishDate: "2018-04-16",
		tags: ["personal", "firebase"],
		url: "https://www.youtube.com/watch?v=akzfaXNPids",
	},
	{
		title: "Build Modern Apps with Firebase and Google Cloud Platform",
		type: "talk",
		publishDate: "2017-05-17",
		conference: "Google I/O '17",
		tags: ["firebase"],
		url: "https://www.youtube.com/watch?v=ZIe0Fn9OtnY",
	},
	{
		title: "Polymer Butter and Firebase Jelly",
		type: "talk",
		publishDate: "2016-10-17",
		conference: "Polymer Summit '16",
		tags: ["firebase", "web", "polymer"],
		url: "https://www.youtube.com/watch?v=f7ODNJKh3Yg",
	},
	{
		title: "Static Web Architecture: Not Just for Hipsters",
		type: "talk",
		publishDate: "2014-04-24",
		conference: "JS.LA Apr'14",
		tags: ["web"],
		url: "https://www.youtube.com/watch?v=COcuo6VH_0I",
	},
	{
		title: "Building modular, scalable web apps? of CORS!",
		type: "talk",
		publishDate: "2012-11-11",
		conference: "RubyConf '12",
		tags: ["web", "ruby"],
		url: "https://www.youtube.com/watch?v=VQA2yrpI7Xk",
	},
	{
		title: "Rails is the new Rails",
		type: "talk",
		publishDate: "2011-11-04",
		conference: "Ruby Midwest '11",
		tags: ["ruby", "rails"],
		url: "https://www.youtube.com/watch?v=7Dh1IWDK2-Q",
	},
	{
		title: "The Grapes of Rapid",
		type: "talk",
		conference: "RubyConf '10",
		publishDate: "2010-11-17",
		tags: ["ruby"],
		url: "https://www.youtube.com/watch?v=C7beg3OzxC4",
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
