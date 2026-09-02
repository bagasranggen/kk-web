import React from 'react';

import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import { createPicsumImage, createPictureItem } from '@/libs/factories';
import {
    CB_COLUMN_STICKY_16_9,
    CB_COLUMN_STICKY_1_1,
    CB_COLUMN_STICKY_3_4,
    CB_COLUMN_STICKY_4_3,
} from '@/components/common/ContentBlocks/CbColumnSticky/index.mock';
import CbText from '@/components/common/ContentBlocks/CbText';

export type CbColumnStickyProps = {} & Pick<CbContainerProps, 'isNested'>;

const CbColumnSticky = ({ isNested }: CbColumnStickyProps): React.ReactElement => {
    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--column-sticky">
            <Columns gutterY={3}>
                <Columns.Column
                    lg={7}
                    className="pt-8">
                    <Columns>
                        <Columns.Column className="flex flex-col gap-3">
                            <Picture items={CB_COLUMN_STICKY_16_9} />
                            <Picture items={CB_COLUMN_STICKY_3_4} />
                            <Picture items={CB_COLUMN_STICKY_16_9} />

                            <Picture items={CB_COLUMN_STICKY_4_3} />
                            <Picture items={CB_COLUMN_STICKY_1_1} />
                            <Picture items={CB_COLUMN_STICKY_4_3} />
                        </Columns.Column>
                        <Columns.Column className="flex flex-col gap-3">
                            <Picture items={CB_COLUMN_STICKY_4_3} />
                            <Picture items={CB_COLUMN_STICKY_1_1} />
                            <Picture items={CB_COLUMN_STICKY_4_3} />

                            <Picture items={CB_COLUMN_STICKY_16_9} />
                            <Picture items={CB_COLUMN_STICKY_3_4} />
                            <Picture items={CB_COLUMN_STICKY_16_9} />
                        </Columns.Column>
                    </Columns>
                </Columns.Column>

                <Columns.Column
                    lg={5}
                    className="">
                    <div className="bg-kk-accent-dark text-light h-full">
                        <CbText
                            isNested
                            className="px-4 py-3 lg:sticky lg:top-0">
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
                        </CbText>
                    </div>
                </Columns.Column>
            </Columns>
        </CbContainer>
    );
};

export default CbColumnSticky;
