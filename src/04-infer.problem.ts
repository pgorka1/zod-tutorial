import {z} from "zod";

const StarWarsPerson = z.object({
    name: z.string(),
});

const StarWarsPeopleResults = z.object({
    results: z.array(StarWarsPerson),
});
type StarWarsPeopleResultsType = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: StarWarsPeopleResultsType) => {
    const parsedData = StarWarsPeopleResults.parse(data);
    parsedData.results.map((person) => {
        console.log(person.name);
    });
};
