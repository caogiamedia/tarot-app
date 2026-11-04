import React, { useState, useEffect } from 'react';
import { tarotCards } from './data/tarotCards';

const initialArticles = Array.from({ length: 50 }, (_, index) => {
  const id = index + 1;
  const categories = [
    "Ý nghĩa 78 lá bài Tarot",
    "Nghệ thuật xem Tarot tình yêu",
    "Tarot tài chính và sự nghiệp",
    "Phương pháp thanh tẩy và bảo vệ năng lượng",
    "Tâm lý học Jung và biểu tượng Tarot"
  ];
  const category = categories[index % categories.length];
  const title = `${category}: Cẩm nang chiêm nghiệm và giải mã chuyên sâu (Phần ${Math.floor(index / categories.length) + 1})`;
  
  return {
    id,
    title,
    category,
    img: "https://images.unsplash.com/photo-1628156157833-2a3b0fa44766?q=80&w=800&auto=format&fit=crop",
    fallbackImg: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800&auto=format&fit=crop",
    excerpt: `Khám phá toàn diện về ${title.toLowerCase()} cùng các phương pháp ứng dụng thực tế giúp bạn thấu hiểu tiềm thức và định hướng tương lai chính xác nhất...`,
    content: `
      # ${title}

      ## 1. Dẫn nhập: Hành trình kết nối với năng lượng vũ trụ
      Trong thế giới hiện đại đầy rẫy những biến động và áp lực tâm lý, con người luôn khao khát tìm kiếm một công cụ soi chiếu nội tâm để định hình con đường đi của riêng mình. Bộ môn Tarot không đơn thuần là một trò chơi bói toán dự đoán tương lai cố định, mà thực chất là một tấm gương phản chiếu tiềm thức tinh tế. Khi bạn lật mở từng lá bài, các biểu tượng cổ mẫu (archetypes) sẽ đánh thức trực giác sâu thẳm bên trong, giúp bạn gọi tên những trăn trở, lo âu hay cơ hội đang tiềm ẩn.
      
      Bài viết này sẽ dẫn dắt bạn đi qua từng tầng ý nghĩa cốt lõi, cung cấp góc nhìn tâm lý học sâu sắc cũng như cách thức ứng dụng chuyên đề "${category}" vào đời sống thực tế hàng ngày một cách hiệu quả nhất.

      ## 2. Nền tảng lý thuyết và cơ chế hoạt động của Tarot
      Để thấu hiểu sâu sắc bản chất của Tarot, chúng ta cần nhìn nhận dưới lăng kính của nhà tâm lý học vĩ đại Carl Jung về "vô thức tập thể" (collective unconscious). Các hình tượng xuất hiện trên 78 lá bài đại diện cho những trải nghiệm chung của nhân loại qua hàng ngàn năm lịch sử: từ nỗi sợ hãi sự cô đơn, khát vọng tự do cho đến những khủng hoảng chuyển giao cuộc đời.
      * **Tính khách quan của năng lượng:** Khi bạn tiến hành xào bài và bốc ngẫu nhiên, sự kết hợp giữa trạng thái tâm lý hiện tại và trường năng lượng vũ trụ sẽ tạo ra sự trùng khớp kỳ diệu với ý nghĩa của lá bài xuất hiện.
      * **Vai trò của trực giác:** Logic chỉ giải quyết được phần nổi của tảng băng chìm. Trực giác kết hợp với tri thức Tarot mới là chiếc chìa khóa mở ra cánh cửa giải quyết các nút thắt bế tắc trong công việc và tình cảm.

      ## 3. Hướng dẫn thực hành và phương pháp chiêm nghiệm tối ưu
      Việc sở hữu kiến thức lý thuyết là chưa đủ nếu bạn không biết cách đưa vào thực tiễn trải nghiệm cá nhân. Dưới đây là các bước chuẩn hóa giúp bạn tối ưu hóa kết quả mỗi lần xem bài:
      1. **Tạo không gian thanh tịnh:** Tránh xa những nơi ồn ào. Hãy đốt một nến thơm hoặc sử dụng đá thạch anh để ổn định tần số năng lượng xung quanh bạn.
      2. **Đặt câu hỏi thông minh (Query Formulation):** Thay vì đặt những câu hỏi đóng kiểu "Tôi có giàu không?", hãy đặt câu hỏi mở dạng "Làm thế nào để tôi tối ưu hóa nguồn lực tài chính trong 3 tháng tới?".
      3. **Ghi chép nhật ký Tarot (Tarot Journaling):** Sau mỗi lần trải bài, hãy viết lại các lá bài xuất hiện, cảm xúc thực tế lúc đó và đối chiếu kết quả sau một khoảng thời gian để nâng cao độ nhạy bén của trực giác.

      ## 4. Những cạm bẫy tâm lý thường gặp khi xem Tarot
      Khi mới bắt đầu bước chân vào con đường nghiên cứu Tarot, rất nhiều người dễ rơi vào trạng thái phụ thuộc thái quá hoặc diễn giải phiến diện:
      * **Hội chứng phụ thuộc lá bài:** Để các quyết định cuộc đời hoàn toàn lệ thuộc vào kết quả bốc bài mà đánh mất quyền tự quyết (free will).
      * **Ám ảnh bởi các lá bài "xấu":** Xem những lá bài như Death hay The Tower là điềm gở thay vì nhìn nhận chúng dưới góc độ tái sinh, lột xác và dọn dẹp những điều cũ kỹ không còn phù hợp.
      * **Thiếu sự khách quan:** Cố gắng ép nghĩa của lá bài theo ý muốn chủ quan thay vì chấp nhận thông điệp thực tế mà vũ trụ đang phản chiếu.

      ## 5. Tổng kết và lời khuyên từ chuyên gia
      Bộ môn Tarot là một người thầy tâm hồn tuyệt vời nhưng đòi hỏi người học phải có một cái đầu lạnh và một trái tim rộng mở. Hãy xem đây là người bạn đồng hành tin cậy trên hành trình phát triển bản thân, chữa lành những tổn thương nội tâm và kiến tạo một cuộc đời thịnh vượng, bình an. 
      
      *Hãy bắt đầu hành trình khám phá ngay hôm nay bằng việc chọn cho mình một bộ bài phù hợp, kết hợp sử dụng các vật phẩm thanh tẩy năng lượng để đạt kết quả chiêm nghiệm hoàn hảo nhất!*
    `
  };
});

const shopItems = [
  { id: 1, name: "Bộ Bài Rider Waite Tarot Gốc", price: "250.000đ", img: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=400", link: "#link-aff-shopee-bai-tarot" },
  { id: 2, name: "Đá Thạch Anh Tím Thanh Tẩy", price: "120.000đ", img: "https://images.unsplash.com/photo-1587823528246-81cecc2d4ea9?q=80&w=400", link: "#link-aff-shopee-da-thach-anh" },
  { id: 3, name: "Nến Thơm Sage Trấn An Tinh Thần", price: "185.000đ", img: "https://images.unsplash.com/photo-1608181114410-db21bf5c8d04?q=80&w=400", link: "#link-aff-shopee-nen-thom" }
];

export default function App() {
  const [step, setStep] = useState('home'); 
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [cardsToDraw, setCardsToDraw] = useState(1);
  const [deck, setDeck] = useState([]); 
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [history, setHistory] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('mystic_tarot_history');
    if (saved) {
      try { setHistory(JSON.parse(saved)); } catch (e) { console.error(e); }
    }
  }, []);

  const playSound = (type) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'flip') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } else if (type === 'bell') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.8);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.8);
      }
    } catch (e) {}
  };

  const spreadConfig = {
    daily: { title: '1 Lá Hằng Ngày', count: 1, positions: ['Thông Điệp Hôm Nay'], icon: '🔮', desc: 'Thông điệp tổng quan, nhanh gọn định hướng cho ngày mới.' },
    love: { title: 'Trải Bài Tình Duyên', count: 3, positions: ['Năng Lượng Quá Khứ', 'Hiện Tại & Vấn Đề', 'Tương Lai & Lời Khuyên'], icon: '💖', desc: 'Luận giải sâu sắc về quá khứ, hiện tại và tương lai mối quan hệ.' },
    career: { title: 'Công Việc & Tài Chính', count: 3, positions: ['Hoàn Cảnh Hiện Tại', 'Thách Thức & Trở Ngại', 'Kết Quả Tiềm Năng'], icon: '⚡', desc: 'Phân tích cơ hội, thách thức và kết quả trên con đường sự nghiệp.' },
    celtic: { title: 'Celtic Cross (10 Lá Chuyên Sâu)', count: 5, positions: ['Hiện Tại', 'Thử Thách', 'Gốc Rễ', 'Quá Khứ Gần', 'Tương Lai Gần'], icon: '🌟', desc: 'Sơ đồ trải bài toàn diện soi chiếu mọi khía cạnh cuộc sống.' },
    zodiac: { title: 'Vòng Tròn 12 Cung Hoàng Đạo', count: 4, positions: ['Cái Tôi & Thể Chất', 'Tài Chính & Giá Trị', 'Giao Tiếp & Trí Tuệ', 'Gia Đình & Nội Tâm'], icon: '🪐', desc: 'Khám phá các tầng năng lượng chi phối theo chu kỳ chiêm tinh.' }
  };

  const startSpread = (spreadType) => {
    playSound('flip');
    setSelectedSpread(spreadType);
    const count = spreadConfig[spreadType].count;
    setCardsToDraw(count);
    setDrawnCards([]);

    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    const uniqueCards = shuffled.slice(0, Math.max(15, count)).map(card => ({
      isFlipped: false,
      cardData: null,
      secretCard: { ...card }
    }));
    
    setDeck(uniqueCards);
    setStep('selecting');
    window.scrollTo(0, 0);
  };

  const handlePickCard = (index) => {
    try {
      const targetCard = deck[index];
      if (!targetCard || targetCard.isFlipped || drawnCards.length >= cardsToDraw) return;
      
      playSound('flip');
      const realCard = targetCard.secretCard;
      const isReversed = Math.random() < 0.3;
      const newCardData = { ...realCard, isReversed };

      const newDeck = [...deck];
      newDeck[index] = { ...targetCard, isFlipped: true, cardData: newCardData };
      setDeck(newDeck);
      setDrawnCards([...drawnCards, newCardData]);
    } catch (err) {
      console.error(err);
    }
  };

  const showResults = () => {
    playSound('bell');
    setIsAnalyzing(true);
    setStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => { 
      setIsAnalyzing(false); 
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleString('vi-VN'),
        spreadName: spreadConfig[selectedSpread].title,
        cards: drawnCards.map(c => `${c.name} (${c.isReversed ? 'Ngược' : 'Xuôi'})`)
      };
      const updatedHistory = [newEntry, ...history].slice(0, 10);
      setHistory(updatedHistory);
      localStorage.setItem('mystic_tarot_history', JSON.stringify(updatedHistory));
    }, 2000);
  };

  const resetApp = () => {
    playSound('flip');
    setStep('home');
    setDrawnCards([]);
    setSelectedArticle(null);
    setIsAnalyzing(false);
    window.scrollTo(0, 0);
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setStep('article');
    window.scrollTo(0, 0);
  };

  const handleShareResult = () => {
    const text = `✨ Kết quả trải bài "${spreadConfig[selectedSpread]?.title}" của tôi trên Mystic Tarot:\n` +
      drawnCards.map((c, i) => `- ${spreadConfig[selectedSpread]?.positions[i] || 'Lá ' + (i+1)}: ${c.name} (${c.isReversed ? 'Ngược' : 'Xuôi'})`).join('\n') +
      `\n🔮 Hãy thử trải nghiệm ngay tại Mystic Tarot Online!`;
    
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const generateDynamicOverview = () => {
    if (!drawnCards || drawnCards.length === 0) return { root: "", challenge: "", future: "", message: "" };

    if (cardsToDraw === 1) {
      const c = drawnCards[0];
      const stateText = c?.isReversed ? "ngược, đòi hỏi sự soi chiếu nội tâm và cẩn trọng" : "xuôi, mang năng lượng thuận lợi và trực diện";
      return {
        root: `Lá bài ${c?.name || ''} ở trạng thái ${stateText} đang phản ánh trọn vẹn tâm trạng cốt lõi của bạn lúc này.`,
        challenge: `Thách thức lớn nhất hiện tại là việc bạn vượt qua những rào cản tư duy cá nhân để giữ vững lập trường.`,
        future: `Hướng đi tương lai mở ra một chu kỳ chuyển hóa rõ rệt khi bạn lắng nghe trực giác bên trong.`,
        message: `Vũ trụ nhắn nhủ rằng: Khi bạn tập trung toàn bộ năng lượng vào "${c?.name || ''}", mọi đáp án sẽ tự khắc sáng tỏ.`
      };
    }

    const c1 = drawnCards[0];
    const c2 = drawnCards[1] || drawnCards[0];
    const c3 = drawnCards[2] || drawnCards[0];
    return {
      root: `Gốc rễ vấn đề xuất phát từ năng lượng của "${c1?.name || ''}" (${c1?.isReversed ? 'ngược' : 'xuôi'}), đặt nền móng cho những trăn trở hiện tại.`,
      challenge: `Ở giai đoạn hiện tại, sự xuất hiện của "${c2?.name || ''}" đòi hỏi bạn phải đối mặt với các mâu thuẫn nội tâm, buông bỏ định kiến cũ.`,
      future: `Tiềm năng tương lai ứng với "${c3?.name || ''}", báo hiệu bước ngoặt chuyển giao mạnh mẽ hướng tới sự cân bằng.`,
      message: `Sự kết hợp giữa các năng lượng chủ đạo tạo thành bức tranh hoàn chỉnh cho thấy chính sự quyết đoán hôm nay sẽ định hình tương lai bạn.`
    };
  };

  const overviewData = generateDynamicOverview();

  return (
    <div className="bg-[#0b0c10] text-slate-100 min-h-screen flex flex-col justify-between font-['Roboto'] selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3b0764 0%, transparent 70%)' }}></div>

      {/* HEADER: Đã phóng to phần danh mục ở góc trên bên phải */}
      <header className="border-b border-purple-900/30 bg-black/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="font-bold text-3xl md:text-4xl text-amber-200 tracking-widest cursor-pointer font-['Playfair_Display'] drop-shadow-md" onClick={resetApp}>
            ✨ MYSTIC TAROT
          </h1>
          <nav className="hidden md:flex gap-8 text-base md:text-lg font-bold tracking-wider uppercase text-amber-300/90 items-center">
            <span className="cursor-pointer hover:text-amber-100 transition" onClick={resetApp}>Trải Bài</span>
            <span className="cursor-pointer hover:text-amber-100 transition" onClick={() => { setStep('home'); setTimeout(() => document.getElementById('seo-blog')?.scrollIntoView({behavior: 'smooth'}), 100); }}>Kiến Thức</span>
            <span className="cursor-pointer hover:text-amber-100 transition" onClick={() => { setStep('home'); setTimeout(() => document.getElementById('shop')?.scrollIntoView({behavior: 'smooth'}), 100); }}>Vật Phẩm</span>
            <button onClick={() => setShowHistoryModal(true)} className="bg-amber-900/50 border border-amber-500 text-amber-200 px-5 py-2 rounded-full hover:bg-amber-500 hover:text-slate-950 transition shadow-md">
              📜 Lịch Sử ({history.length})
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow flex flex-col items-center justify-center text-center w-full relative z-10">
        
        {step === 'home' && (
          <div className="w-full animate-fade-in">
            <div className="space-y-12">
              {/* TRANG CHỦ: Đã phóng to phần tiêu đề lớn */}
              <h2 className="text-6xl md:text-8xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 font-['Playfair_Display'] py-4 drop-shadow-2xl leading-tight">
                Lắng Nghe Vũ Trụ <br/> Hiểu Rõ Chính Mình
              </h2>
              <p className="text-slate-200 max-w-4xl mx-auto text-xl md:text-2xl pb-6 leading-relaxed font-light">
                Luận giải Tarot chuyên sâu từ bộ bài chuẩn 78 lá. Khám phá những góc khuất nội tâm và tìm ra hướng đi rõ ràng cho cuộc đời bạn.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 w-full">
                {Object.entries(spreadConfig).map(([key, config]) => (
                  <div key={key} onClick={() => startSpread(key)} className="relative bg-gradient-to-br from-[#1a233a] to-[#0b0c10] border border-[#b58c49]/50 p-8 rounded-2xl cursor-pointer hover:border-amber-400 hover:-translate-y-3 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group text-center overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="relative text-5xl mb-4 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform duration-500">{config.icon}</div>
                      <h3 className="relative font-bold text-2xl text-amber-300 font-['Playfair_Display'] mb-3 group-hover:text-amber-200">{config.title}</h3>
                      <p className="relative text-sm text-slate-300 font-medium leading-relaxed mb-6">{config.desc}</p>
                    </div>
                    <div className="relative inline-block bg-slate-950/80 text-amber-400 font-bold px-5 py-2 rounded-full border border-amber-900/50 text-sm mx-auto">Rút {config.count} lá bài</div>
                  </div>
                ))}
              </div>
            </div>

            <div id="seo-blog" className="mt-32 pt-16 border-t border-slate-800/60 text-left w-full">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl text-amber-500">📜</span>
                <h2 className="text-4xl font-bold text-amber-300 font-['Playfair_Display']">Hành Trình Tri Thức Tarot ({initialArticles.length} Bài Viết Chuẩn SEO)</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {initialArticles.slice(0, visibleCount).map(article => (
                  <div key={article.id} onClick={() => openArticle(article)} className="bg-[#12141c] border border-slate-800 rounded-xl overflow-hidden hover:border-amber-900/60 transition cursor-pointer group flex flex-col justify-between">
                    <div>
                      <div className="h-44 overflow-hidden relative bg-slate-900">
                        <img 
                          src={article.img} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                          onError={(e) => { e.target.src = article.fallbackImg; }} 
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">{article.category}</span>
                        <h3 className="text-lg font-bold text-slate-200 group-hover:text-amber-400 font-['Playfair_Display'] line-clamp-2">{article.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                      </div>
                    </div>
                    <div className="p-5 pt-0"><span className="text-amber-500 text-xs font-semibold uppercase tracking-wider block">Đọc chi tiết (1000+ từ) →</span></div>
                  </div>
                ))}
              </div>
              {visibleCount < initialArticles.length && (
                <div className="text-center mt-12">
                  <button onClick={() => setVisibleCount(prev => Math.min(prev + 4, initialArticles.length))} className="bg-slate-900 border border-amber-600/60 hover:bg-amber-600 hover:text-slate-950 text-amber-300 text-base px-10 py-3 rounded-full font-bold transition shadow-lg">
                    Xem Thêm Bài Viết ({initialArticles.length - visibleCount} bài nữa) ↓
                  </button>
                </div>
              )}
            </div>

            <div id="shop" className="mt-20 pt-16 border-t border-slate-800/60 text-left w-full pb-10">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl text-amber-500">🕯️</span>
                <div>
                  <h2 className="text-4xl font-bold text-amber-300 font-['Playfair_Display']">Vật Phẩm Thanh Tẩy & Hỗ Trợ</h2>
                  <p className="text-slate-400 mt-2">Nạp năng lượng cho không gian tâm linh của bạn</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {shopItems.map(item => (
                  <div key={item.id} className="bg-gradient-to-b from-[#1a233a] to-[#0b0c10] border border-[#b58c49]/30 rounded-2xl overflow-hidden p-4 text-center flex flex-col justify-between">
                    <div>
                      <div className="h-56 rounded-xl overflow-hidden mb-4 border border-slate-800 relative bg-slate-900">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=400"; }} />
                      </div>
                      <h3 className="text-lg font-bold text-amber-100 font-['Playfair_Display'] h-14">{item.name}</h3>
                      <p className="text-2xl font-bold text-amber-500 my-3">{item.price}</p>
                    </div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold py-3 rounded-lg uppercase tracking-wider text-sm transition mt-2">Mua trên Shopee 🛒</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODAL LỊCH SỬ TRẢI BÀI */}
        {showHistoryModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#12141c] border border-amber-500/40 rounded-3xl max-w-lg w-full p-8 text-left space-y-6 shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h3 className="text-2xl font-bold text-amber-300 font-['Playfair_Display']">📜 Nhật Ký Trải Bài Của Bạn</h3>
                <button onClick={() => setShowHistoryModal(false)} className="text-slate-400 hover:text-white text-xl">✕</button>
              </div>
              <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
                {history.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">Chưa có lịch sử trải bài nào được lưu.</p>
                ) : (
                  history.map(item => (
                    <div key={item.id} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs text-amber-500 font-semibold">
                        <span>{item.spreadName}</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="text-sm text-slate-300 space-y-1">
                        {item.cards.map((c, i) => (
                          <div key={i} className="">• {c}</div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="pt-2 text-center">
                <button onClick={() => { localStorage.removeItem('mystic_tarot_history'); setHistory([]); }} className="text-xs text-red-400 hover:underline">Xóa lịch sử</button>
              </div>
            </div>
          </div>
        )}

        {step === 'article' && selectedArticle && (
          <div className="w-full max-w-4xl mx-auto text-left animate-fade-in space-y-8 pb-16">
            <button onClick={resetApp} className="text-amber-400 hover:text-amber-300 text-sm font-semibold tracking-wider uppercase underline">← Quay lại trang chủ</button>
            <div className="space-y-4 border-b border-slate-800 pb-8">
              <span className="text-xs uppercase tracking-widest text-amber-500 bg-amber-950/40 px-3 py-1 rounded border border-amber-900/50 font-bold">{selectedArticle.category}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-['Playfair_Display'] leading-tight">{selectedArticle.title}</h2>
              <p className="text-slate-400 text-sm">Đăng bởi Mystic Tarot • Chuyên mục SEO • 1000+ từ chiêm nghiệm</p>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden border border-slate-800 my-6 bg-slate-900">
              <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = selectedArticle.fallbackImg; }} />
            </div>
            <div className="text-slate-300 text-lg leading-[2.2] space-y-6 whitespace-pre-line bg-slate-950/60 p-8 md:p-12 rounded-3xl border border-slate-800">
              <p>{selectedArticle.content}</p>
            </div>
            <div className="pt-10 border-t border-slate-800 text-center">
              <button onClick={resetApp} className="bg-slate-900 border border-amber-600 text-amber-300 hover:bg-amber-600 hover:text-slate-950 font-bold px-10 py-3 rounded-full transition">← Về trang chủ & Trải bài ngay</button>
            </div>
          </div>
        )}

        {step === 'selecting' && (
          <div className="space-y-12 w-full animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-[#1a233a] to-[#0b0c10] border border-[#b58c49]/50 px-10 py-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h3 className="text-amber-300 text-4xl font-['Playfair_Display'] font-bold mb-4 drop-shadow-md">{spreadConfig[selectedSpread]?.title}</h3>
              <p className="text-slate-200 text-xl font-medium">
                Hãy tĩnh tâm và chọn <span className="font-bold text-amber-400 text-3xl mx-2">{cardsToDraw - drawnCards.length}</span> lá bài trong số các lá ngẫu nhiên bên dưới
              </p>
            </div>
            
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap py-10 max-w-5xl mx-auto">
              {deck.map((item, index) => (
                <div key={index} onClick={() => handlePickCard(index)} className="w-28 h-48 md:w-36 md:h-56 perspective-1000 cursor-pointer">
                  <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] shadow-2xl rounded-xl transition-transform ${item.isFlipped ? '' : 'hover:-translate-y-4 hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]'}`}
                       style={{ transform: item.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl border-[3px] border-[#b58c49] bg-[#1a233a] overflow-hidden flex flex-col items-center justify-center shadow-inner">
                      <span className="absolute top-2 left-2 text-[#b58c49] text-sm opacity-80">🌜</span>
                      <span className="absolute top-2 right-2 text-[#b58c49] text-sm opacity-80">🌛</span>
                      <span className="absolute bottom-2 left-2 text-[#b58c49] text-sm opacity-80">🌛</span>
                      <span className="absolute bottom-2 right-2 text-[#b58c49] text-sm opacity-80">🌜</span>
                      <div className="w-16 h-16 border border-[#b58c49]/30 rounded-full flex items-center justify-center relative">
                         <span className="text-5xl text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] z-10">❂</span>
                      </div>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#b58c49 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                    </div>
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border-[3px] border-amber-400/80 bg-slate-950 overflow-hidden p-1 flex flex-col">
                      {item.cardData && (
                        <div className={`w-full h-full relative transition-transform ${item.cardData.isReversed ? 'rotate-180' : ''}`}>
                          <img 
                            src={item.cardData.image} 
                            alt={item.cardData.name} 
                            className="absolute inset-0 w-full h-full rounded object-cover" 
                            onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"; }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-20">
              {drawnCards.length === cardsToDraw && (
                <button onClick={showResults} className="animate-pulse hover:animate-none bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-slate-900 text-2xl px-14 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(251,191,36,0.7)] transition-all tracking-wide">
                  Tiếp Nhận Thông Điệp ✨
                </button>
              )}
            </div>
            
            <button onClick={resetApp} className="text-lg text-slate-400 hover:text-amber-300 underline tracking-wide mt-4 transition-colors">← Hủy và chọn lại trải bài</button>
          </div>
        )}

        {step === 'result' && (
          <div className="w-full animate-fade-in pb-12">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-40 space-y-10">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">🔮</div>
                </div>
                <h3 className="text-4xl font-['Playfair_Display'] text-amber-300 animate-pulse font-bold">Đang kết nối năng lượng vũ trụ...</h3>
              </div>
            ) : (
              <div className="space-y-16">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 font-['Playfair_Display'] drop-shadow-md">
                    Hành Trình Nội Tâm Của Bạn
                  </h2>
                  <button onClick={handleShareResult} className="bg-slate-900 border border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold px-6 py-3 rounded-full transition shadow-lg flex items-center gap-2">
                    {copySuccess ? '✅ Đã sao chép kết quả!' : '📤 Chia sẻ kết quả'}
                  </button>
                </div>

                <div className="flex flex-col gap-16">
                  {drawnCards.map((card, index) => {
                    const isReversed = card?.isReversed || false;
                    const meaning = isReversed ? (card?.reversed || {}) : (card?.upright || {});
                    const positionName = spreadConfig[selectedSpread]?.positions?.[index] || `Lá số ${index + 1}`;

                    return (
                      <div key={index} className="bg-gradient-to-br from-[#12141c]/90 to-[#0b0c10]/90 border border-purple-900/40 p-10 md:p-14 rounded-[2.5rem] text-left shadow-2xl flex flex-col lg:flex-row gap-12 relative overflow-hidden">
                        <div className="flex flex-col items-center shrink-0 z-10 mx-auto lg:mx-0">
                          <div className="w-64 h-96 md:w-72 md:h-[28rem] bg-black rounded-2xl border-4 border-amber-500/60 p-2 shadow-[0_0_40px_rgba(251,191,36,0.2)] relative">
                            <div className={`w-full h-full relative ${isReversed ? 'rotate-180' : ''}`}>
                              <img 
                                src={card?.image} 
                                alt={card?.name} 
                                className="absolute inset-0 w-full h-full rounded-xl object-cover" 
                                onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"; }}
                              />
                            </div>
                          </div>
                          <span className="mt-8 bg-black/80 text-amber-300 text-lg px-8 py-3 rounded-full border border-amber-500/30 font-bold shadow-lg uppercase tracking-widest">
                            {isReversed ? 'Ngược (Reversed)' : 'Xuôi (Upright)'}
                          </span>
                        </div>

                        <div className="space-y-8 flex-grow z-10">
                          <div className="border-b border-slate-700/50 pb-6">
                            <span className="text-sm md:text-base uppercase tracking-widest text-amber-500/80 font-bold bg-amber-950/30 px-4 py-2 rounded-lg border border-amber-900/40">
                              Lá Số {index + 1} • {positionName}
                            </span>
                            <h3 className="text-5xl md:text-6xl font-bold text-white font-['Playfair_Display'] mt-6 mb-3">{card?.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {meaning?.keywords?.map((kw, i) => (
                                <span key={i} className="text-xs md:text-sm bg-slate-800 text-amber-200/80 px-3 py-1 rounded-full border border-slate-600">#{kw}</span>
                              ))}
                            </div>
                            <p className="text-amber-200 italic font-medium text-xl md:text-2xl leading-relaxed mt-2">{meaning?.core}</p>
                          </div>

                          <div className="space-y-8 text-slate-200 text-lg md:text-xl leading-[2.2]">
                            <div className="bg-slate-900/80 p-8 rounded-2xl border-l-4 border-purple-500 shadow-inner space-y-3">
                              <strong className="text-purple-300 font-['Playfair_Display'] text-2xl md:text-3xl block mb-2">👁️ Phân Tích Tâm Lý Sâu Sắc:</strong> 
                              <p className="text-slate-300 leading-relaxed">{meaning?.psychology} Lá bài này phản ánh trực tiếp trạng thái tiềm thức của bạn hiện tại, nơi những mong cầu sâu kín hoặc nỗi sợ vô hình đang âm thầm định hình các quyết định hàng ngày.</p>
                            </div>
                            
                            <div className="bg-amber-900/20 p-8 rounded-2xl border border-amber-500/30 shadow-inner space-y-3">
                              <strong className="text-amber-400 font-['Playfair_Display'] text-2xl md:text-3xl block mb-2">🗝️ Lời Khuyên Hành Động Thực Tế:</strong> 
                              <p className="text-slate-200 leading-relaxed">{meaning?.action} Hãy chủ động thực hiện những bước đi nhỏ nhưng kiên quyết ngay từ hôm nay để đạt kết quả tốt nhất.</p>
                            </div>
                            
                            <div className="p-4 border-l-2 border-amber-500 italic text-amber-200/90 text-base md:text-lg bg-black/40 rounded-r-xl">
                              " Câu hỏi chiêm nghiệm dành riêng cho bạn: {meaning?.reflection} "
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-[#12141c] border border-amber-700/50 p-10 md:p-16 rounded-[3rem] text-left shadow-2xl relative overflow-hidden mt-16 space-y-10">
                  <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem]">🌌</div>
                  <div className="flex flex-col items-center text-center gap-6 relative z-10">
                    <span className="text-5xl drop-shadow-md">✨</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-amber-300 font-['Playfair_Display']">Tổng Quan Năng Lượng Trải Bài</h3>
                    <div className="w-24 h-1 bg-amber-500/50 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-4">
                    <div className="bg-black/50 p-6 rounded-2xl border border-amber-900/40 space-y-3">
                      <span className="text-2xl">🌱</span>
                      <h4 className="text-xl font-bold text-amber-300 font-['Playfair_Display']">1. Gốc Rễ Vấn Đề</h4>
                      <p className="text-slate-300 text-base leading-relaxed">{overviewData.root}</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-2xl border border-amber-900/40 space-y-3">
                      <span className="text-2xl">⚡</span>
                      <h4 className="text-xl font-bold text-amber-300 font-['Playfair_Display']">2. Thách Thức & Chuyển Hóa</h4>
                      <p className="text-slate-300 text-base leading-relaxed">{overviewData.challenge}</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-2xl border border-amber-900/40 space-y-3">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-xl font-bold text-amber-300 font-['Playfair_Display']">3. Hướng Đi Tương Lai</h4>
                      <p className="text-slate-300 text-base leading-relaxed">{overviewData.future}</p>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 border border-amber-500/30 p-8 rounded-2xl text-slate-200 text-xl leading-relaxed relative z-10">
                    <strong className="text-amber-300 block mb-3 font-['Playfair_Display'] text-2xl">💡 Lời Nhắn Từ Vũ Trụ:</strong>
                    <p>{overviewData.message}</p>
                  </div>
                  
                  <div className="text-center pt-6 relative z-10 border-t border-slate-800">
                    <button onClick={resetApp} className="bg-amber-600 hover:bg-amber-500 text-slate-900 text-xl md:text-2xl px-14 py-5 rounded-full font-bold transition-all shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:scale-105">Hoàn Tất & Trải Bài Mới</button>
                  </div>
                </div>

                <div className="mt-20 pt-16 border-t border-slate-800 text-left">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl">🕯️</span>
                    <h3 className="text-3xl font-bold text-amber-300 font-['Playfair_Display']">Hỗ trợ Năng lượng của Bạn</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {shopItems.map(item => (
                      <div key={`result-shop-${item.id}`} className="bg-slate-900/80 border border-[#b58c49]/30 rounded-2xl overflow-hidden p-4 text-center flex flex-col justify-between">
                        <div className="h-48 rounded-xl overflow-hidden mb-4 border border-slate-800 relative bg-slate-900">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=400"; }} />
                        </div>
                        <h4 className="text-lg font-bold text-amber-100 font-['Playfair_Display'] h-12">{item.name}</h4>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full bg-transparent border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-slate-900 font-bold py-2 rounded-lg uppercase tracking-wider text-sm transition mt-4">Mua trên Shopee 🛒</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-purple-900/40 bg-black/80 pt-12 pb-8 mt-16">
        <div className="max-w-5xl mx-auto px-8 text-center space-y-6">
          <h4 className="text-amber-500/90 font-bold tracking-[0.2em] uppercase text-base">Tuyên bố miễn trừ trách nhiệm</h4>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Các thông điệp luận giải Tarot trên website này được cung cấp nhằm mục đích chiêm nghiệm, giải trí và phát triển tinh thần cá nhân. Chúng tôi <strong>không</strong> cung cấp các lời khuyên chuyên môn mang tính thay thế cho y tế, pháp lý, tài chính hay tâm lý học lâm sàng. Mọi quyết định và hành động trong cuộc sống đều nằm dưới quyền tự quyết của bạn. Bằng việc sử dụng website, bạn đồng ý tự chịu trách nhiệm hoàn toàn với những diễn giải và lựa chọn của riêng mình.
          </p>
          <div className="pt-6 border-t border-slate-800/60"><p className="text-sm text-slate-500 tracking-wide">&copy; 2026 Mystic Tarot Online. Đã đăng ký bản quyền.</p></div>
        </div>
      </footer>
    </div>
  );
}