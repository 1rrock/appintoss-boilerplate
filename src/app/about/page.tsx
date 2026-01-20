'use client';

import { Top, List, ListRow } from '@toss/tds-mobile';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f2f4f6]">
            <Top title="정보 화면" />
            <div className="px-5 py-4">
                <ListHeader title="애플리케이션 정보" />
                <List>
                    <ListRow
                        contents={
                            <ListRow.Texts
                                type="2RowTypeB"
                                top="버전"
                                bottom="1.0.0"
                            />
                        }
                    />
                    <ListRow
                        contents={
                            <ListRow.Texts
                                type="2RowTypeB"
                                top="사용 라이브러리"
                                bottom="TDS Mobile, Next.js"
                            />
                        }
                    />
                </List>
            </div>
        </div>
    );
}

function ListHeader({ title }: { title: string }) {
    return (
        <div className="px-5 py-2">
            <span className="text-sm font-bold text-[#8b95a1]">{title}</span>
        </div>
    );
}
