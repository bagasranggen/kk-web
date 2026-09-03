const NODE_ENV = process?.env?.NODE_ENV || 'development';

export const getEnv = () => {
    return {
        isProduction: NODE_ENV === 'production',
    };
};
