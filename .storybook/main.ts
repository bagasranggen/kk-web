import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
    stories: [
        // '../**/*.mdx',
        '../components/common/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
        '../components/pages/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
        '../components/layout/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    ],
    addons: ['@chromatic-com/storybook', '@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
    framework: '@storybook/nextjs-vite',
    staticDirs: ['../public'],
};
export default config;
