import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import AboutIndex from './index';
import { IMAGE_TEXT_MEDIA } from '@/components/common/Banner/ImageText/index.mock';
import parse from 'html-react-parser';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Pages/About Index',
    component: AboutIndex,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof AboutIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        entries: {
            banner: {
                media: IMAGE_TEXT_MEDIA,
                heading: 'Korekayu',
                subHeading: 'unit oldies pop!',
                children: parse(`<p>Korekayu (baca: korek kayu) adalah Sekstet Oldies Pop dari Yogyakarta,
Indonesia. Bermusik dari tahun 2012 dengan ciri khas vokal yang bertumpuk
membangun sebuah harmoni. Alfon(Voc), Bondan(Voc-Gt), Lukas(Voc-Gt), Yusti(Voc-Keys), Bagas (Bass), dan Alvin (Drum).</p>

<p>Korekayu merilis EP Retrorika Metropolitan (2016), LP Romansa (2020),
LP Verhaal (2025), kompilasi Bintang Muda Lokananta Vol 1 (2025), Live Album Een Verhaal in de Tijd (2026), dan EP Retrorika-
Retrorika Metropolitan (2026)</p>`),
            },
        },
    },
};
