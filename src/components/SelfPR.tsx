// 自己PRセクションのコンポーネント

const SelfPR = () => (
    <section className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(255,153,0,0.12)] p-7 border" style={{ borderColor: '#FFB34755' }}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: '#FF9900', borderColor: '#FFB347' }}>自己PR</h2>
        <div className="flex flex-col gap-6">
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: '#FFF5E1CC', borderColor: '#FF9900' }}>
                <div className="font-bold mb-1" style={{ color: '#FF9900' }}>＜分かりやすい資料作成＞</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                    運用保守で運用手順書を作成する際に、誰が見ても操作を行える分かりやすい資料作成を心がけました。<br />
                    お客様向けに作成した操作手順書が分かりやすいとのことから、同じシステムを使う他のお客様のところでも採用されることがありました。<br />
                    また、メモ書きのような手順書を書き直したり、様々な方が更新をして情報や書き方がばらけている資料を見つけた際は、積極的に整理を行っています。
                </div>
            </div>
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: '#FFF5E1CC', borderColor: '#FF9900' }}>
                <div className="font-bold mb-1" style={{ color: '#FF9900' }}>＜UIの改善＞</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                    設計の裁量があった社内システム開発では、UIの改善に取り組みました。<br />
                    自社システムはどれも似た見た目をしていますが、このシステムではHOME（メニュー画面）を作成したり、一覧の行クリックで詳細画面に遷移したりなど、以降のシステムでも引き継がれるUIを追加することができました。
                </div>
            </div>
        </div>
    </section>
);

export default SelfPR; 