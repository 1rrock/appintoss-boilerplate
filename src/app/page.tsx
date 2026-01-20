'use client';

import { Button, Top, List, ListRow } from '@toss/tds-mobile';

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2f4f6]">
      <Top title="메인 화면" />
      <div className="px-5 py-4">
        <List>
          <ListRow
            left={<ListRow.AssetIcon name="bank-toss" />}
            contents={<ListRow.Texts type="2RowTypeA" top="동해물과 백두산이" bottom="마르고닳도록 하느님이보우하사" />}
            right={
              <Button color="primary" size="small" variant="weak">
                Button
              </Button>
            }
          />
          <ListRow
            contents={
              <ListRow.Texts
                type="2RowTypeA"
                top="페이지 이동 체험"
                bottom="아래 네비게이션을 통해 이동해보세요."
              />
            }
          />
        </List>
      </div>
    </div>
  );
}
