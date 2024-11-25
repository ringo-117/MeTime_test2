import { defineConfig } from 'vite';

export default defineConfig({
    base: '/MeTime_test2/',
    root: 'app',
    build: {
        outDir: '../dist',
        rollupOptions: {
        input: {
            main: 'app/index.html',
            salon: 'app/salon.html',
            menu: 'app/menu.html',
            faq: 'app/faq.html',
            diary: 'app/diary.html',
        }
        }
    },
    resolve: {
        alias: {
            '/MeTime_test2/': './', // 相対パスに変換
        }
    }
});