// 自己PRセクションのコンポーネント

const SelfPR = () => (
    <section className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(255,153,0,0.12)] p-7 border" style={{ borderColor: '#FFB34755' }}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: '#FF9900', borderColor: '#FFB347' }}>自己PR</h2>
        <div className="flex flex-col gap-6">
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: '#FFF5E1CC', borderColor: '#FF9900' }}>
                <div className="font-bold mb-1" style={{ color: '#FF9900' }}>＜分かりやすい資料作成＞</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                    運用手順書を誰でも理解できるように作成し、他のお客様にも採用されました。情報が整理されていない資料も積極的に整えています。
                </div>
            </div>
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: '#FFF5E1CC', borderColor: '#FF9900' }}>
                <div className="font-bold mb-1" style={{ color: '#FF9900' }}>＜UIの改善＞</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                    社内システム開発でUIを改善し、HOME画面や行クリックでの詳細遷移など、使いやすい機能を追加しました。
                </div>
            </div>
        </div>
    </section>
);

export default SelfPR; 