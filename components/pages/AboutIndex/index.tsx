import React from 'react';
import Banner, { ImageTextProps } from '@/components/common/Banner';
import CbImageText from '@/components/common/ContentBlocks/CbImageText';
import {
    CB_IMAGE_TEXT_MEDIA_MAIN,
    CB_IMAGE_TEXT_MEDIA_SECONDARY,
} from '@/components/common/ContentBlocks/CbImageText/index.mock';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import CbText from '@/components/common/ContentBlocks/CbText';
import CbColumns from '@/components/common/ContentBlocks/CbColumns';
import Picture from '@/components/common/Picture';
import { createPicsumImage, createPictureItem } from '@/libs/factories';
import CbColumnSticky from '@/components/common/ContentBlocks/CbColumnSticky';

export type AboutIndexProps = {
    entries: {
        banner?: Pick<ImageTextProps, 'media' | 'heading' | 'subHeading' | 'children'>;
    };
};

const AboutIndex = ({ entries }: AboutIndexProps): React.ReactElement => {
    return (
        <>
            {entries.banner && <Banner.ImageText {...entries.banner} />}

            <section className="mt-15">
                <CbImageText
                    mediaMain={CB_IMAGE_TEXT_MEDIA_MAIN}
                    mediaSecondary={CB_IMAGE_TEXT_MEDIA_SECONDARY}>
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
                </CbImageText>
            </section>

            <section className="mt-15">
                <CbColumns
                    variant="slim"
                    items={[
                        {
                            children: (
                                <CbText
                                    isNested
                                    align="center">
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
                                </CbText>
                            ),
                        },
                    ]}
                />
            </section>

            <section className="mt-15">
                <CbColumns
                    variant="2/3"
                    items={[
                        {
                            children: (
                                <CbText isNested>
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
                                </CbText>
                            ),
                        },
                        {
                            children: (
                                <Picture
                                    items={[
                                        createPictureItem({
                                            item: createPicsumImage({ width: 1200, height: 900 }),
                                            sizes: '(min-width: 992px) 40.972vw, (min-width: 768px) 83.073vw, 100vw',
                                        }),
                                    ]}
                                />
                            ),
                        },
                    ]}
                />
            </section>

            <section className="mt-15">
                <CbColumns
                    variant="3/2"
                    items={[
                        {
                            children: (
                                <Picture
                                    items={[
                                        createPictureItem({
                                            item: createPicsumImage({ width: 1200, height: 900 }),
                                            sizes: '(min-width: 992px) 40.972vw, (min-width: 768px) 83.073vw, 100vw',
                                        }),
                                    ]}
                                />
                            ),
                        },
                        {
                            children: (
                                <CbText isNested>
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
                                </CbText>
                            ),
                        },
                    ]}
                />
            </section>

            <section className="mt-15">
                <Picture
                    items={[
                        createPictureItem({
                            item: createPicsumImage({ width: 2800, height: 1575 }),
                            // sizes: '(min-width: 992px) 40.972vw, (min-width: 768px) 83.073vw, 100vw',
                        }),
                    ]}
                />

                <Container className="mt-6">
                    <Columns className="justify-center">
                        <Columns.Column
                            md={10}
                            lg={9}>
                            <CbText
                                isNested
                                align="center">
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
                            </CbText>
                        </Columns.Column>
                    </Columns>
                </Container>
            </section>

            <section className="mt-15 mb-15">
                <CbColumnSticky />
            </section>
        </>
    );
};

export default AboutIndex;
