import React from 'react';
import Banner, { ImageTextProps } from '@/components/common/Banner';
import CbImageText from '@/components/common/ContentBlocks/CbImageText';
import {
    CB_IMAGE_TEXT_MEDIA_MAIN,
    CB_IMAGE_TEXT_MEDIA_SECONDARY,
} from '@/components/common/ContentBlocks/CbImageText/index.mock';

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
        </>
    );
};

export default AboutIndex;
