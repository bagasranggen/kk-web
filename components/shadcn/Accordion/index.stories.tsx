import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/Accordion';
import { Plus } from 'lucide-react';
import Container from '@/components/common/Container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shadcn/Accordion',
    // component: Main,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {},
    render: () => {
        return (
            // <Accordion defaultValue={['item-1']}>
            <Container>
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger
                            className="py-1"
                            // customIcon={{
                            //     component: Plus,
                            //     props: {
                            //         strokeWidth: 0.75,
                            //         className:
                            //             'pointer-events-none *:nth-2:origin-center *:nth-2:transition-transform *:nth-2:group-aria-expanded/accordion-trigger:rotate-90',
                            //     },
                            // }}
                        >
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Blanditiis commodi deleniti fugit hic, obcaecati soluta. Consequatur
                            doloremque eius hic id inventore libero magnam, non odit placeat quisquam tempora ut
                            voluptates! A animi, autem est fuga natus nihil provident quas quo repudiandae rerum ullam
                            voluptas voluptatibus. Deleniti eaque, esse laborum magni maiores necessitatibus numquam
                            quam quidem ullam ut. Aliquam debitis, dicta eveniet expedita illo in laborum, mollitia
                            nihil odio, omnis possimus soluta. Animi asperiores at beatae impedit in repudiandae sed
                            similique velit? Aperiam asperiores autem consequatur distinctio, dolore eligendi excepturi
                            hic minus natus neque nobis pariatur quam recusandae totam ullam, voluptate voluptatem?
                            Asperiores aspernatur atque beatae debitis dolor, eligendi et, fugiat id inventore iste
                            laboriosam, nemo nesciunt obcaecati perferendis quaerat quas quibusdam quis rerum sapiente
                            ut. Alias consequatur dolore excepturi fugit ipsam quibusdam, saepe veritatis. A assumenda
                            at autem culpa, dolor earum et labore laudantium magnam odit provident quae quos recusandae
                            tempora vitae. A accusantium cumque debitis eaque eveniet in iusto laudantium molestiae
                            quidem quod, repudiandae voluptatem. Est ex hic labore libero maxime modi necessitatibus
                            nemo nihil non optio perferendis placeat, quas quisquam repellendus sunt veniam vitae? Cum
                            dolorum enim exercitationem inventore ipsum neque officia! Deserunt hic id illum provident
                            quae?
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        );
    },
};
