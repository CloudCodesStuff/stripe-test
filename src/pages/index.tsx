import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';
import Nav from '@/components/Nav';
import { api } from '@/utils/api';
import { useRouter } from 'next/router';

// const items = [
//     {
//         name: 'Slab',
//         description: 'Create beautiful screenshots of your code.',
//         tags: ['design', 'code', 'screenshot'],
//     },
//     {
//         name: 'Visual Studio Code (VS Code)',
//         description: 'A popular open-source code editor with extensive features and extensions.',
//         tags: ['code', 'editor'],
//     },
//     {
//         name: 'GitHub',
//         description: 'A platform for version control and collaborative software development.',
//         tags: ['code', 'version control'],
//     },
//     {
//         name: 'Git',
//         description: 'A distributed version control system for tracking code changes.',
//         tags: ['code', 'version control'],
//     },
//     {
//         name: 'Docker',
//         description: 'A platform for developing, shipping, and running applications in containers.',
//         tags: ['container', 'development'],
//     },
//     {
//         name: 'JIRA',
//         description: 'A project management and issue tracking tool by Atlassian, ideal for Agile environments.',
//         tags: ['project management', 'Agile'],
//     },
//     {
//         name: 'Postman',
//         description: 'An API testing and development tool for building and testing APIs.',
//         tags: ['API', 'testing'],
//     },
//     // Add more items here as needed
// ];

type Item = {
    id?: string; // Make id optional
    updatedAt?: Date; // Make updatedAt optional
    clicksts?: number; // Make clicksts optional
    link: string;
    company: string;
    title: string;
    image: string;
    location: string;
    compensation: string;
    description: string;
    tags: string[];
    createdAt: Date;
};


export default function Home() {
    const listings = api.listing.getAll.useQuery();
    const items = listings.data
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    const uniqueTags = [...new Set<string>(items?.flatMap((item: { tags: any; }) => item.tags))]; // Get unique tags

    const handleSearch = (query: string) => {
        const filtered = items?.filter((item: { title: string; description: string; tags: string | string[]; }) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            selectedTags.every(tag => item.tags?.includes(tag))
        ) || []; // Provide an empty array as the default value if no items match the filter criteria.
        setFilteredItems(filtered);
    };


    const handleTagFilter = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // Remove the tag if it's already selected
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
        } else {
            // Add the tag if it's not selected
            setSelectedTags([...selectedTags, tag]);
        }
    };

    useEffect(() => {
        // Filter items when selectedTags change
        const filtered = items?.filter((item) =>
            selectedTags.length === 0 || selectedTags.every(tag => item.tags.includes(tag))
        ) || [];
        setFilteredItems(filtered);
    }, [selectedTags]);



    return (
        <main className=" ">
            <Nav></Nav>
            <div className="max-w-2xl mt-10 lg:mt-24 mx-auto px-4 mb-8">
                <div className="flex justify-center items-center  md:justify-start space-x-2 mb-3">
                    <span className="relative flex h-2 w-2 lg:w-4 lg:h-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 lg:w-4 lg:h-4 bg-green-400"></span>
                    </span>
                    <p className="text-sm lg:text-base leading-none text-gray-400">994 spots left</p>
                </div>
                <h1 className="font-semibold mb-4  text-center md:text-left text-5xl leading-[48px] lg:leading-[60px]">
                    Find <span className="underlinemint relative">flawless </span> UI inspiration.
                </h1>
                <p className="text-base text-center md:text-left lg:text-lg mb-4">
                    The 1000 best indiehacker tools. Manually reviewed and up to date.
                </p>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-2 md:space-x-2 items-center">
                    <UpgradeButton></UpgradeButton>
                </div>

            </div>
            <div className='max-w-2xl flex flex-wrap items-center justify-center md:justify-start gap-2 my-10 mx-auto px-4'>
                <Button
                    variant={selectedTags.length > 0 ? 'destructive' : 'secondary'}
                    onClick={() => setSelectedTags([])} // Clear all selected tags
                    className={` ${selectedTags.length === 0 ? 'hidden' : ''}`}
                    size={'sm'}
                >
                    {selectedTags.length > 0 ? (<span className='flex items-center'>Clear <X className='inline w-5 h-5'></X></span>) : 'Show all'}
                </Button>

                {uniqueTags.map((tag, tagIndex) => (
                    <Button
                        key={tagIndex}
                        onClick={() => handleTagFilter(tag)}
                        variant={selectedTags.includes(tag) ? 'outline' : 'secondary'} // Set variant based on selection
                        // className={` ${selectedTags.includes(tag) ? 'bg-primary/25' : ''}`}
                        size={'sm'}

                    >
                        {tag}
                    </Button>
                ))}
            </div>
            <div className="max-w-2xl mx-auto px-4 mb-8">
                <form>
                    <Input
                        placeholder="Search..."
                        className=""
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            handleSearch(e.target.value);
                        }}
                    />
                </form>
            </div>


            <section className="max-w-2xl mx-auto px-4 mb-8 grid gap-4">
                {filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className="w-full rounded-md p-4 shadow-sm flex gap-4 border">
                            <div className="flex-none border rounded-full w-14 h-14 overflow-hidden">
                                <img className="w-13 h-13" src={item.image} loading="lazy" />
                            </div>
                            <div className="flex flex-col max-w-[80%] justify-center ">
                                <h1 className="font-semibold text-lg">{item.title}</h1>
                                <p className="text-sm font-mono whitespace-break-spaces truncate text-ellipsis max-w-lg text-muted-foreground">{item.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} className="">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </section>
        </main>
    );
}

const UpgradeButton = () => {
    const { mutateAsync: createCheckoutSession } =
        api.stripe.createCheckoutSession.useMutation();
    const { push } = useRouter();
    return (
        <Button
            onClick={async () => {
                const { checkoutUrl } = await createCheckoutSession();
                if (checkoutUrl) {
                    void push(checkoutUrl);
                }
            }}
        >
            Upgrade account
        </Button>
    );
};