import { defineConfig } from 'vite';

export default defineConfig({
    root: 'app',
    build: {
        outDir: '../dist',
        rollupOptions: {
        input: {
            main: 'app/index.html',
            salon: 'app/salon.html',  // 複数ページを追加
            menu: 'app/menu.html',
            faq: 'app/faq.html',
            diary: 'app/diary.html',
        }
        }
    }
});