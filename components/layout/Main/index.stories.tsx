import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Main from './index';
import Container from '@/components/common/Container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/Main',
    component: Main,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        children: (
            <>
                <Container
                    as="section"
                    style={{ paddingTop: '15rem', marginTop: '5rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aspernatur debitis dicta earum
                    ex fugit laboriosam laudantium nesciunt obcaecati odit, officiis placeat provident quae sequi ullam
                    veniam voluptas voluptates!
                </Container>

                <section style={{ marginTop: '5rem', marginBottom: '10rem', backgroundColor: 'red' }}>
                    <Container as="section">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate distinctio dolores
                        rerum. A asperiores aspernatur iste iusto nam possimus quia. Accusamus accusantium adipisci
                        alias aliquid architecto consequatur eaque esse eveniet facere ipsum, magnam maxime neque nisi
                        perspiciatis praesentium quos rerum sequi similique tempore tenetur totam veniam veritatis
                        vitae. Amet assumenda culpa cum, cupiditate, debitis deserunt distinctio, dolore doloremque
                        eaque error eum expedita fugiat fugit harum ipsum iste laudantium libero maiores nisi nulla
                        numquam omnis possimus provident quaerat qui quos repellendus saepe sed unde ut? Culpa enim
                        optio voluptatem. Architecto, atque dignissimos dolorem error impedit ipsam rem saepe? A
                        accusamus architecto aspernatur atque, culpa debitis ea fugiat impedit ipsum nisi, quaerat,
                        quibusdam ratione repellat similique voluptatem. Commodi, consequatur, cupiditate deserunt
                        doloremque dolores dolorum eum illum inventore ipsa iusto mollitia quasi quia quisquam sed unde.
                        Aliquam animi dicta ipsam omnis praesentium rem, sint. Autem culpa esse sunt ullam! A ad aliquam
                        animi consequatur dignissimos eius, enim et excepturi id ipsam ipsum labore minus molestias
                        officiis quae quaerat quas quis quo rem, repellat sapiente sed sequi sit soluta tenetur vel
                        velit voluptatem. Eveniet ipsam maxime non perspiciatis quas quidem sint. Aliquam beatae
                        dignissimos doloremque error non omnis quia reiciendis rem tenetur vitae!
                    </Container>
                </section>
            </>
        ),
    },
};
