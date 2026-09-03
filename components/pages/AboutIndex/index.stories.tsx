import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import AboutIndex from './index';
import { IMAGE_TEXT_MEDIA } from '@/components/common/Banner/ImageText/index.mock';
import parse from 'html-react-parser';
import {
    CB_IMAGE_TEXT_MEDIA_MAIN,
    CB_IMAGE_TEXT_MEDIA_SECONDARY,
} from '@/components/common/ContentBlocks/CbImageText/index.mock';
import { CB_IMAGE_HALF } from '@/components/common/ContentBlocks/CbImage/index.mock';
import { CB_IMAGE_SHRUNK_MEDIA } from '@/components/common/ContentBlocks/CbImageShrunk/index.mock';
import { CB_COLUMN_STICKY_MEDIA } from '@/components/common/ContentBlocks/CbColumnSticky/index.mock';

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

            contentBlocks: [
                {
                    typeHandle: 'imageText',
                    className: 'mt-15',
                    mediaMain: CB_IMAGE_TEXT_MEDIA_MAIN,
                    mediaSecondary: CB_IMAGE_TEXT_MEDIA_SECONDARY,
                    children: parse(`
                    <p>
                        Korekayu terbentuk pada 1 Juni 2012 dengan nama “Retro Project”. Senada dengan kecintaan akan
                        musik-musik populer era 50-80an membawa Alfon (vokal), Alvin (drum), Bagas (bass), Bondan
                        (gitar), dan Arnold (kibor) untuk berkarya dengan nafas serupa. Pada awal terbentuk di UKM Musik
                        Kampus Sanata Dharma (Sexen).
                    </p>
                    <p>
                        Pada pertengahan tahun 2014, nama “Korekayu” secara resmi disematkan untuk menggantikan Retro
                        Project yang diistirahatkan. Arnold (kibor) harus kembali ke kampung halaman di Lampung dan
                        posisinya digantikan oleh Yusti (kibor).
                    </p>
                    <p>
                        Nama baru ini menandai bahwa band ini akan dibawa lebih dari sekadar side project dan mulai
                        berkarya dengan lagu-lagu original. Single “Jingga Senja dan Lalu Lalang Manusia” diikuti “Di
                        Bawah Tangga” menandai langkah awal perjalanan Korekayu pada tahun 2015. Sampailah pada debut
                        album perdana bertajuk “Retrorika Metropolitan” dirilis pada 1 Februari 2016 dalam bentuk
                        rilisan fisik CD yang berisi 5 lagu original. Dengan diproduseri oleh Martinus Indri Gobeer
                        (Alm), Korekayu mengemas mini album ini dengan kemasan kayu dan 80% packaging dari mini album
                        ini dikerjakan secara handmade.
                    </p>
                    `),
                },
                {
                    typeHandle: 'columns',
                    variant: 'slim',
                    className: 'mt-15',
                    items: [
                        {
                            typeHandle: 'column',
                            items: [
                                {
                                    typeHandle: 'text',
                                    align: 'center',
                                    children: parse(`
                                    <p>
                                        Korekayu kembali merilis single pada pertengahan tahun 2017 dengan judul “Jemari
                                        Berpena” dalam format audio dan video. Pengerjaan single dilakukan di Interest
                                        Studio, dibantu oleh Lukas (gitar) dan Elgar (kibor), serta mixing mastering
                                        oleh Billy Dinata.
                                    </p>
                                    <p>
                                        Terhitung setahun setelah rilisnya Jemari Berpena, Korekayu memulai proses
                                        penggarapan album kedua dan Lukas (gitar) diperkenalkan sebagai personil keenam.
                                        Total 11 lagu dipersiapkan untuk mengisi album penuh ini.
                                    </p>
                                    <p>
                                        Pada 15 Juni 2019, video klip “Radio” menandai pelepasan album ini dan
                                        selanjutnya diikuti oleh beberapa single seperti “Pulang ke Jogja”, “Pasar
                                        Malem” yang berkolaborasi dengan Olski, dan “Bersepeda”. Video klip lagu
                                        “Kecewa” pada Januari 2020 menutup rangkaian perilisan single dan album penuh
                                        Korekayu yang bertajuk “Romansa” dilepas pada 6 Maret 2020.
                                    </p>
                                    `),
                                },
                            ],
                        },
                    ],
                },
                {
                    typeHandle: 'columns',
                    variant: '2/3',
                    className: 'mt-15',
                    items: [
                        {
                            typeHandle: 'column',
                            items: [
                                {
                                    typeHandle: 'text',
                                    children: parse(`
                                    <p>
                                        Pada masa lockdown akibat Covid-19, Korekayu merayakan ulang tahun ke-8 dengan
                                        merilis rangkaian video live session denga tajuk “Sewindu”. Korekayu memainkan
                                        beberapa lagu dari album “Romansa” secara live di beberapa tempat berbeda dan
                                        berkolaborasi dengan beberapa musisi. “Suketi Berkunjung” dimainkan di
                                        Frogstone, “Ordinary Greetings” dimainkan di kamar Bagas (bass), “Kecewa”
                                        diaransemen ulang dengan aroma country bluegrass berkolaborasi dengan Danu
                                        Kusumawardhana (fiddle) di Let’s Talk YK, dan lagu “Sari 2” dibawakan oleh Nufi
                                        Wardhana sedangkan Korekayu berlaku sebagai choir di Amigos Huis Studio. Semua
                                        video live session dapat dinikmati di kanal Yutube Korekayu.
                                    </p>

                                    <p>
                                        Masih dalam suasana Covid-19, Korekayu kembali merilis single baru dengan judul
                                        “Jurus Sakti” pada 25 April 2021. Single ini mengisahkan sebuah nostalgia
                                        romansa anak muda tempo dulu, dimana taman, bunga, rayuan, dan kata-kata
                                        romantis masih menjadi senjata andalan dalam memadu kasih. Video musik “Jurus
                                        Sakti” dikemas dengan mengangkat budaya Jawa yaitu Kethoprak dikemas menjadi
                                        lebih modern dengan konsep Kethoprak Sinema atau Sineprak.
                                    </p>

                                    <p>
                                        Pada awal 2021 saat PPKM naik level, muncul ide untuk membuat kolaborasi kembali
                                        antara Korekayu dan Olski, untuk taruhan pada saat final Euro 2020, bulan juli
                                        2021. Kemenangan akhirnya jatuh untuk jagoan Korekayu yaitu Italia. Single "Kita
                                        Rayakan Bersama Saat Semua Telah Usai" dirilis pada 17 Desember 2021 ini dikemas
                                        dengan video musik yang menampilkan teman-teman dari Olski dan Korekayu yang
                                        menuliskan harapan setelah pandemi usai. Video digarap apik oleh Martin
                                        Paramarta (Unexpected Journal AV).
                                    </p>
                                `),
                                },
                            ],
                        },
                        {
                            typeHandle: 'column',
                            items: [
                                {
                                    typeHandle: 'image',
                                    items: CB_IMAGE_HALF,
                                },
                            ],
                        },
                    ],
                },
                {
                    typeHandle: 'columns',
                    variant: '3/2',
                    className: 'mt-15',
                    items: [
                        {
                            typeHandle: 'column',
                            items: [
                                {
                                    typeHandle: 'image',
                                    items: CB_IMAGE_HALF,
                                },
                            ],
                        },
                        {
                            typeHandle: 'column',
                            items: [
                                {
                                    typeHandle: 'text',
                                    children: parse(`
                                    <p>
                                        Sepuluh tahun berkarya, Korekayu mengabadikan peringatan ulang tahun ke-10
                                        dengan melepas single yang sepaket dengan video musik dengan judul “Si Pejalan
                                        Kaki”. Single yang ditulis oleh Bondan (gitar) dan Alfon (vokal) menceritakan
                                        tentang bagaimana band ini berjalan. Layaknya pejalan kaki yang berjalan dengan
                                        tidak cepat namun tidak pula lambat, menikmati hingar dan sepinya sebuah
                                        perjalanan. Lagu digarap di Satrio Piningit Studio dengan Sasi Kirono
                                        mengeksekusi mixing mastering. Video lirik dilepas di kanal Youtube berisikan
                                        kolase perjalanan korekayu dari awal (2012) hingga yang terkini (2022) dirangkai
                                        oleh Martin Paramarta (Unexpected Journal AV).
                                    </p>

                                    <p>
                                        Tepat satu tahun setelah merayakan hari jadi ke-10, Korekayu memulai kembali
                                        proses gawe besar, album ketiga mulai dikerjakan di pertengahan tahun 2023.
                                        Merajut semangat, mengumpulkan kembali materi-materi yang tercecer dalam file
                                        voice note, dan menyeleksi 12 lagu baru untuk mengisi barisan lagu-lagu di album
                                        ketiga. Proses penggarapan album dilakukan di Rockstar Studio dan Satrio
                                        Piningit Studio, Abraham Michael dipercaya sebagai audio engineer, dan mixing
                                        mastering kembali dieksekusi oleh tangan dingin Sasi Kirono. Warna yang lebih
                                        segar dengan sound yang semakin dewasa diperdengarkan oleh Korekayu dengan
                                        merilis single “September” di akhir tahun 2023. Video lirik yang melankolis yang
                                        turut menyertai lepasnya lagu ini dapat dinikmati di kanal Youtube Korekayu.
                                    </p>
                                `),
                                },
                            ],
                        },
                    ],
                },
                {
                    typeHandle: 'imageShrunk',
                    media: CB_IMAGE_SHRUNK_MEDIA,
                    className: 'mt-15',
                    children: parse(`
                    <p>
                        2024 awal, Korekayu kembali melepas single yang kali ini berkolaborasi dengan The
                        Rain dengan judul “Terserah Maumu”. Dikemas dengan video musik animasi, lagu yang
                        energik ini dapat dinikmati di seluruh platfor digital dan kanal Youtube Korekayu.
                        Sebuah kebanggaan dapat berkolaborasi dengan salah satu band idola dari Korekayu.
                    </p>

                    <p>
                        Single “Badut Bodoh” menjadi karya selanjutnya yang dilepas Korekayu di tahun 2024.
                        Dikemas bersama video lirik yang digarap apik oleh Unexpected Journal AV,
                        menggambarkan kondisi seseorang yang selalu ada namun hanya menjadi “badut” bagi
                        orang yang disayanginya.
                    </p>

                    <p>
                        Desember 2024, Korekayu berkolaborasi dengan Teko Su dalam acara rutin mereka yang
                        bertajuk Sewulan #2. Kolaborasi ini menghasilkan sebuah video lirik dari single
                        Korekayu “Terima Kasih”. Video animasi yang bercerita tentang seorang nenek dan
                        kucing kesayangannya digarap apik oleh Bintang Kukang.
                    </p>

                    <p>
                        Sebulan berselang Korekayu merilis satu video lirik kembali dari single yang
                        berjudul “Angin Membawamu”. Video dari satu lagu melankolis ini dikerjakan oleh
                        Prastiyo Rakhmad. Rilisnya singe ini sekaligus menjadi single terakhir yang dirilis
                        sebelum album Verhaal.
                    </p>
                    `),
                },
                {
                    typeHandle: 'columnSticky',
                    className: 'mt-15 mb-15',
                    media: CB_COLUMN_STICKY_MEDIA,
                    children: parse(`
                    <p>
                        Bulan April sampai dengan Mei 2025 adalah bulan tersibuk Korekayu dengan agenda sebagai
                        berikut: Screening MV “Sepotong Kecil Hatimu” dan Hearing Session Album “Verhaal” (9
                        April 2025). Album Verhaal rilis di digital streaming platform (11 April 2025).
                        Memainkan setlist Album Verhaal di Jogja Record Store Day (12 April 2025). Release party
                        Album Kompilasi Bintang Muda Lokananta Vol.1 (19 April 2025). Dan ditutup dengan satu
                        panggung pensi di Solo.
                    </p>

                    <p>
                        Bulan Mei 2025 diawali dengan 2 panggung di Jogja. Pertengahan Mei 2025, Korekayu
                        berkesempatan untuk tour 3 kota bersama Bintang Muda Lokananta. Titik pertama di MBloc
                        Space Jakarta, kemudian JNM Bloc Yogyakarta, dan ditutup di Lokananta Bloc Surakarta.
                    </p>

                    <p>
                        8 Agustus 2025, Korekayu berkesempatan untuk melakukan special show Album Verhaal di
                        ArtJog. Perhelatan ini diberi judul “Een Verhaal in de Tijd”. Special setlist album
                        Verhaal dengan brass section, ketipung, seruling, backing vocal, dan layer gitar
                        akustik. Momen spesial ini dilengkapi dengan kolaborasi langsung bersama Indra Prasta
                        dan Iwan Tanda dari The Rain. Show ini akan diproduksi menjadi live album pertama
                        Korekayu yang dirilis pada 1 Januari 2026 dalam format audio-video.
                    </p>

                    <p>
                        Tahun 2026, bertepatan dengan peringatan 10 tahun EP Retrorika Metropolitan (2016),
                        Korekayu akan merilis ulang karya tersebut dengan format akustik dengan tajuk Retrorika
                        Metropolitan.
                    </p>
                    `),
                },
            ],
        },
    },
};
