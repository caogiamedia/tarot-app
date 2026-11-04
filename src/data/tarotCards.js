export const tarotCards = [
  // --- 22 LÁ ẨN CHÍNH (MAJOR ARCANA) ---
  {
    id: "fool", name: "The Fool (0)", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    upright: { keywords: ["Khởi đầu mới", "Tự do", "Niềm tin", "Phiêu lưu"], core: "Bước nhảy đức tin vào điều chưa biết.", psychology: "Khao khát tự do nguyên thủy, rũ bỏ ranh giới an toàn.", love: "Cuộc gặp gỡ ngẫu hứng, rung cảm mạnh mẽ.", career: "Ngã rẽ mới đầy triển vọng và đột phá.", action: "Tin vào bản năng thay vì logic.", reflection: "Tôi đang sợ điều gì khi bắt đầu mới?" },
    reversed: { keywords: ["Liều lĩnh", "Bốc đồng", "Sợ hãi"], core: "Sự bất cẩn hoặc trốn chạy thực tại.", psychology: "Dùng tự do để trốn tránh trách nhiệm.", love: "Mối quan hệ mập mờ, thiếu cam kết.", career: "Rủi ro tài chính do thiếu chuẩn bị.", action: "Chậm lại, kiểm tra kỹ trước khi hành động.", reflection: "Tôi đang thực sự tự do hay chạy trốn?" }
  },
  {
    id: "magician", name: "The Magician (I)", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    upright: { keywords: ["Kiến tạo", "Ý chí", "Tập trung", "Biểu hiện"], core: "Bạn đã có sẵn mọi nguồn lực trong tay.", psychology: "Sự liên kết hoàn hảo giữa ý thức và tiềm thức.", love: "Sức hút cá nhân cực kỳ mãnh liệt.", career: "Hiệu suất đỉnh cao, chốt thỏa thuận tốt.", action: "Chuyển từ suy nghĩ sang hành động.", reflection: "Tôi cần tập trung vào mục tiêu nào nhất?" },
    reversed: { keywords: ["Thao túng", "Thiếu tự tin", "Phân tán"], core: "Tài năng bị lãng phí hoặc dùng sai mục đích.", psychology: "Hội chứng kẻ mạo danh hoặc dùng chiêu trò.", love: "Lời nói thiếu chân thành, thao túng.", career: "Kế hoạch nằm trên giấy vì thiếu kỷ luật.", action: "Kiểm tra lại động cơ, sống chân thành.", reflection: "Tôi đang trì hoãn vì sợ thất bại?" }
  },
  {
    id: "high_priestess", name: "The High Priestess (II)", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    upright: { keywords: ["Trực giác", "Bí ẩn", "Vô thức"], core: "Lắng nghe tiếng nói thầm lặng từ bên trong.", psychology: "Trực giác sắc bén, linh cảm chứa đựng sự thật.", love: "Kết nối tâm linh sâu sắc, thấu hiểu ngầm.", career: "Quan sát kỹ các chi tiết ẩn giấu trước khi quyết định.", action: "Dành thời gian tĩnh lặng chiêm nghiệm.", reflection: "Trực giác đang cố thì thầm điều gì?" },
    reversed: { keywords: ["Bí bách", "Phớt lờ trực giác"], core: "Ngắt kết nối với tiếng nói nội tâm.", psychology: "Quá phụ thuộc logic, bỏ qua linh cảm.", love: "Sự che giấu hoặc thiếu lòng tin.", career: "Bỏ qua dấu hiệu cảnh báo sớm.", action: "Quay về đối diện với chính mình.", reflection: "Tôi đang che giấu sự thật nào?" }
  },
  {
    id: "empress", name: "The Empress (III)", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    upright: { keywords: ["Sung túc", "Nuôi dưỡng", "Sáng tạo"], core: "Sự trù phú và tình yêu thương bao dung.", psychology: "Trân trọng bản thân, tận hưởng cuộc sống.", love: "Tình yêu nồng ấm, chăm sóc tận tụy.", career: "Dự án sáng tạo đơm hoa kết trái.", action: "Chăm sóc cơ thể, tận hưởng sự thoải mái.", reflection: "Tôi đã yêu thương bản thân đủ chưa?" },
    reversed: { keywords: ["Phụ thuộc", "Trì trệ", "Kiểm soát"], core: "Mất cân bằng năng lượng nuôi dưỡng.", psychology: "Kiệt sức vì lo cho người khác quá mức.", love: "Kiểm soát ngột ngạt dưới danh nghĩa quan tâm.", career: "Trì trệ do thiếu động lực.", action: "Thiết lập lại ranh giới cá nhân.", reflection: "Tôi có đang quá phụ thuộc người khác?" }
  },
  {
    id: "emperor", name: "The Emperor (IV)", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/RWS_Tarot_04_Emperor.jpg",
    upright: { keywords: ["Quyền lực", "Kỷ luật", "Cấu trúc"], core: "Thiết lập trật tự và nền tảng vững chắc.", psychology: "Kiểm soát lý trí, lãnh đạo định hướng.", love: "Cam kết rõ ràng, bảo bọc, ổn định.", career: "Quản lý tốt, lập kế hoạch chi tiết.", action: "Gánh vác trách nhiệm, đưa ra quy tắc.", reflection: "Tôi có đang quá cứng nhắc không?" },
    reversed: { keywords: ["Độc đoán", "Lạm quyền", "Hỗn loạn"], core: "Sự sụp đổ cấu trúc hoặc lạm quyền.", psychology: "Kiểm soát quá mức vì sợ hãi hỗn loạn.", love: "Áp đặt, gia trưởng, thiếu thấu cảm.", career: "Đổ bể do quản lý yếu kém.", action: "Buông bớt quyền kiểm soát, lắng nghe.", reflection: "Sự cứng nhắc bảo vệ hay bóp nghẹt tôi?" }
  },
  {
    id: "hierophant", name: "The Hierophant (V)", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    upright: { keywords: ["Truyền thống", "Đạo đức", "Cố vấn"], core: "Tìm kiếm chân lý qua tri thức chuẩn mực.", psychology: "Tìm ý nghĩa tinh thần qua giá trị truyền thống.", love: "Mối quan hệ nghiêm túc, hướng tới hôn nhân.", career: "Tuân thủ quy trình, tìm cố vấn giỏi.", action: "Học hỏi kinh nghiệm từ người đi trước.", reflection: "Hệ thống niềm tin nào đang chi phối tôi?" },
    reversed: { keywords: ["Phá quy tắc", "Nổi loạn", "Giáo điều"], core: "Bất mãn với khuôn mẫu cũ.", psychology: "Ngột ngạt với giáo điều, muốn tự lập.", love: "Bất đồng quan điểm sống sâu sắc.", career: "Xung đột với quy định cơ quan.", action: "Duy trì suy nghĩ độc lập.", reflection: "Tôi tuân thủ vì đúng hay vì sợ phán xét?" }
  },
  {
    id: "lovers", name: "The Lovers (VI)", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
    upright: { keywords: ["Tình yêu", "Hòa hợp", "Lựa chọn"], core: "Kết nối linh hồn và ngã rẽ cam kết.", psychology: "Dung hòa các giá trị nội tâm.", love: "Thấu hiểu, đồng điệu, tình yêu chân thành.", career: "Hợp tác thành công, đối tác ăn ý.", action: "Lắng nghe cả lý trí lẫn con tim.", reflection: "Lựa chọn này có đúng giá trị của tôi?" },
    reversed: { keywords: ["Mất kết nối", "Bất hòa", "Sai lầm"], core: "Chia rẽ giá trị sống, bối rối ngã rẽ.", psychology: "Mâu thuẫn sâu sắc giữa lý trí và cảm xúc.", love: "Khoảng cách tâm hồn, cám dỗ sai trái.", career: "Sai lầm ký kết hợp đồng.", action: "Dừng lại, soi rọi lại nội tâm.", reflection: "Điều gì đang khiến tôi phân vân?" }
  },
  {
    id: "chariot", name: "The Chariot (VII)", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    upright: { keywords: ["Ý chí", "Kiểm soát", "Chiến thắng"], core: "Bứt phá giành chiến thắng nhờ ý chí.", psychology: "Làm chủ cảm xúc, sẵn sàng tiến bước.", love: "Cùng vượt thử thách, tiến chương mới.", career: "Gặt hái thành công lớn, kỷ luật vững vàng.", action: "Tập trung cao độ vào mục tiêu.", reflection: "Tôi đang dồn năng lượng vào đâu?" },
    reversed: { keywords: ["Mất kiểm soát", "Bỏ cuộc", "Bốc đồng"], core: "Chệch hướng, mất khả năng kiểm soát.", psychology: "Cảm giác bất lực, năng lượng kéo ngược.", love: "Cả hai đi ngược hướng, cái tôi lớn.", career: "Dự án đổ bể do thiếu định hướng.", action: "Hãm phanh, xem xét lại bản đồ.", reflection: "Tôi đang cố kiểm soát điều gì?" }
  },
  {
    id: "strength", name: "Strength (VIII)", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    upright: { keywords: ["Sức mạnh nội tâm", "Kiên nhẫn", "Bao dung"], core: "Hóa giải nghịch cảnh bằng sự kiên nhẫn.", psychology: "Dùng lòng trắc ẩn thuần hóa phần tối.", love: "Bao dung, tha thiết vượt qua sóng gió.", career: "Giải quyết mâu thuẫn khéo léo, bản lĩnh.", action: "Kiên nhẫn, bình tĩnh là sức mạnh.", reflection: "Tôi có đang dịu dàng với chính mình?" },
    reversed: { keywords: ["Tự ti", "Yếu lòng", "Mất bình tĩnh"], core: "Cạn kiệt ý chí hoặc bản năng lấn át.", psychology: "Hoài nghi năng lực, dễ cáu gắt.", love: "Bất an, dùng lời sắc bén tổn thương nhau.", career: "Áp lực lớn muốn buông xuôi.", action: "Nghỉ ngơi, nạp lại năng lượng tinh thần.", reflection: "Nỗi sợ nào đang làm suy yếu tôi?" }
  },
  {
    id: "hermit", name: "The Hermit (IX)", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    upright: { keywords: ["Chiêm nghiệm", "Cô độc", "Tìm chân lý"], core: "Rời xa ồn ào tìm ánh sáng nội tâm.", psychology: "Cần không gian riêng tư suy ngẫm sâu.", love: "Cần thời gian lắng đọng một mình.", career: "Làm việc độc lập, nghiên cứu sâu.", action: "Tắt tiếng ồn, đối diện nội tâm tĩnh lặng.", reflection: "Tôi học được gì trong lúc cô độc?" },
    reversed: { keywords: ["Cô lập", "Lạc lối", "Từ chối kết nối"], core: "Biến cô độc thành cô đơn độc hại.", psychology: "Trốn tránh thế giới, chìm trong tiêu cực.", love: "Xa cách, lạnh lùng, đóng cửa trái tim.", career: "Làm việc bảo thủ, từ chối góp ý.", action: "Mở lòng kết nối lại mọi người.", reflection: "Tôi đang chữa lành hay trốn chạy?" }
  },
  {
    id: "wheel_of_fortune", name: "Wheel of Fortune (X)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    upright: { keywords: ["Vận mệnh", "Thay đổi", "Cơ hội"], core: "Vòng quay số phận mang đến bước ngoặt.", psychology: "Đón nhận biến đổi với tâm thế linh hoạt.", love: "Duyên số đưa đẩy, bước tiến bất ngờ.", career: "Cơ hội lớn xuất hiện đúng lúc.", action: "Thuận theo dòng chảy tự nhiên.", reflection: "Tôi đón nhận thay đổi với thái độ nào?" },
    reversed: { keywords: ["Vận rủi tạm thời", "Trì trệ", "Kháng cự"], core: "Giai đoạn trũng hoặc chống quy luật.", psychology: "Cảm thấy xui xẻo do cố bám víu cái cũ.", love: "Bất ổn, hiểu lầm, trắc trở thời điểm.", career: "Khó khăn tài chính tạm thời.", action: "Chấp nhận thực tế, linh hoạt xoay chuyển.", reflection: "Bài học rút ra từ trắc trở này là gì?" }
  },
  {
    id: "justice", name: "Justice (XI)", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/RWS_Tarot_11_Justice.jpg",
    upright: { keywords: ["Công lý", "Sự thật", "Cân bằng"], core: "Hành động mang lại kết quả tương xứng.", psychology: "Quyết định công tâm dựa trên sự thật.", love: "Sòng phẳng, tôn trọng lẫn nhau.", career: "Ký kết rõ ràng, nhận đền đáp xứng đáng.", action: "Hành động chính trực, chịu trách nhiệm.", reflection: "Quyết định có dựa trên sự thật không?" },
    reversed: { keywords: ["Bất công", "Thiếu trách nhiệm", "Né tránh"], core: "Thiếu công bằng hoặc né tránh hậu quả.", psychology: "Tự dối lòng, chối bỏ trách nhiệm.", love: "Ích kỷ, đổ lỗi cho nhau.", career: "Rủi ro pháp lý, tranh chấp.", action: "Nhìn thẳng sự thật, dũng cảm sửa sai.", reflection: "Tôi đang né tránh sự thật nào?" }
  },
  {
    id: "hanged_man", name: "The Hanged Man (XII)", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    upright: { keywords: ["Góc nhìn mới", "Hy sinh", "Buông bỏ"], core: "Tạm dừng hành động để đổi góc nhìn.", psychology: "Buông cái tôi, nhìn vấn đề chiều hướng khác.", love: "Kiên nhẫn, thấu hiểu nội tâm đối phương.", career: "Dự án chững lại nhưng là cơ hội tái cấu trúc.", action: "Ngừng kháng cự, chấp nhận trạng thái treo.", reflection: "Góc nhìn mới nào đang chờ tôi?" },
    reversed: { keywords: ["Hy sinh vô ích", "Cố chấp", "Nạn nhân"], core: "Chần chừ kéo dài, đóng vai nạn nhân.", psychology: "Chịu đựng hoàn cảnh độc hại không đổi.", love: "Hy sinh một chiều mệt mỏi.", career: "Kẹt trong công việc vô định.", action: "Chấm dứt chần chừ, đứng lên làm chủ.", reflection: "Tôi chịu đựng vì tiến bộ hay thói quen?" }
  },
  {
    id: "death", name: "Death (XIII)", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    upright: { keywords: ["Kết thúc", "Tái sinh", "Thanh lọc"], core: "Kết thúc chu kỳ để nhường chỗ khởi đầu mới.", psychology: "Thanh lọc vĩ đại, lột xác nội tâm.", love: "Chấm dứt bế tắc, sang giai đoạn mới.", career: "Thay đổi định hướng lớn, đổi việc.", action: "Xuôi dòng chấp nhận chuyển giao.", reflection: "Điều gì cần được buông bỏ lúc này?" },
    reversed: { keywords: ["Trì trệ", "Sợ thay đổi", "Bám víu"], core: "Bám víu quá khứ, chống lại thay đổi.", psychology: "Sợ cô đơn nên kẹt trong vũng lầy cũ.", love: "Sợ chia ly nên níu kéo độc hại.", career: "Sợ rủi ro nên chôn chân một chỗ.", action: "Học cách chấp nhận quy luật buông bỏ.", reflection: "Tôi đang sợ mất đi điều gì nhất?" }
  },
  {
    id: "temperance", name: "Temperance (XIV)", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    upright: { keywords: ["Hòa hợp", "Cân bằng", "Điều độ"], core: "Pha trộn thái cực tạo sự cân bằng hoàn hảo.", psychology: "Tìm lại bình yên sau giông bão.", love: "Dung hòa khác biệt, bền vững.", career: "Phối hợp nhịp nhàng, ổn định.", action: "Tìm điểm vàng trung dung.", reflection: "Khía cạnh nào cần điều chỉnh?" },
    reversed: { keywords: ["Mất cân bằng", "Thái quá", "Xung đột"], core: "Thiếu điều độ gây đổ vỡ.", psychology: "Sống mất kiểm soát, căng thẳng tột độ.", love: "Bất đồng không thể dung hòa.", career: "Làm việc quá sức, vội vàng.", action: "Chỉnh đốn lại nhịp sống sinh hoạt.", reflection: "Thói quen thái quá nào đang làm hại tôi?" }
  },
  {
    id: "devil", name: "The Devil (XV)", image: "https://upload.wikimedia.org/wikipedia/commons/5/58/RWS_Tarot_15_Devil.jpg",
    upright: { keywords: ["Cám dỗ", "Ràng buộc", "Vật chất"], core: "Xiềng xích tự nguyện trói buộc.", psychology: "Bị thao túng bởi dục vọng, phụ thuộc độc hại.", love: "Kiểm soát xác thịt, thao túng tâm lý.", career: "Kẹt trong công việc chỉ vì tiền.", action: "Nhìn rõ xiềng xích để tự tháo bỏ.", reflection: "Thói quen nào đang giam cầm tôi?" },
    reversed: { keywords: ["Giải thoát", "Thức tỉnh", "Phá bỏ"], core: "Tỉnh thức rũ bỏ ràng buộc độc hại.", psychology: "Nhận thức góc tối, có dũng khí cắt đứt.", love: "Thoát khỏi kiểm soát, tìm tự do.", career: "Từ bỏ môi trường độc hại.", action: "Cam kết sống tỉnh thức, độc lập.", reflection: "Tôi đã sẵn sàng rũ bỏ điều gì?" }
  },
  {
    id: "tower", name: "The Tower (XVI)", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    upright: { keywords: ["Sụp đổ", "Thức tỉnh", "Biến cố"], core: "Tòa tháp ảo tưởng sụp đổ tìm sự thật.", psychology: "Cú sốc làm sập niềm tin sai lầm cũ.", love: "Tan vỡ ảo tưởng, rạn nứt không hàn gắn.", career: "Mất việc hoặc dự án đổ bể bất ngờ.", action: "Chấp nhận sự thật, xây dựng lại nền móng.", reflection: "Cấu trúc giả tạo nào vừa sụp đổ?" },
    reversed: { keywords: ["Tránh thảm họa", "Trì hoãn", "Sợ thay đổi"], core: "Cố né tránh cuộc thanh trừng tất yếu.", psychology: "Vá víu tòa tháp đã hỏng nặng.", love: "Cố duy trì quan hệ rạn nứt trong sợ hãi.", career: "Sợ đối diện tái cấu trúc.", action: "Dũng cảm đối mặt thực tế.", reflection: "Tôi đang cố che đậy vấn đề gì?" }
  },
  {
    id: "star", name: "The Star (XVII)", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    upright: { keywords: ["Hy vọng", "Chữa lành", "Cảm hứng"], core: "Sau cơn mưa trời sáng, hy vọng thắp lên.", psychology: "Tâm hồn gột rửa, tràn đầy bình yên.", love: "Chữa lành tổn thương, tương lai hứa hẹn.", career: "Cảm hứng sáng tạo, tầm nhìn xa.", action: "Nuôi dưỡng hy vọng, thả lỏng tâm hồn.", reflection: "Niềm tin nào đang sưởi ấm tôi?" },
    reversed: { keywords: ["Mất niềm tin", "Tuyệt vọng", "Bi quan"], core: "Mất hy vọng, lạc lõng trong bóng tối.", psychology: "Bi quan, thấy tương lai mịt mờ.", love: "Thất vọng, tổn thương cũ tái phát.", career: "Mất phương hướng, chán nản.", action: "Tìm kiếm điều tích cực nhỏ nhặt nhất.", reflection: "Điều gì đã dập tắt niềm tin của tôi?" }
  },
  {
    id: "moon", name: "The Moon (XVIII)", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    upright: { keywords: ["Ảo ảnh", "Lo âu", "Tiềm thức"], core: "Đi qua sương mù đối mặt nỗi sợ.", psychology: "Chi phối bởi lo âu, tưởng tượng tiêu cực.", love: "Mập mờ, thiếu minh bạch, bất an.", career: "Thông tin mơ hồ, bẫy ngầm tài chính.", action: "Kiên nhẫn chờ màn sương tan.", reflection: "Nỗi sợ vô căn cứ nào đang phóng đại?" },
    reversed: { keywords: ["Vượt qua sợ hãi", "Sự thật sáng tỏ"], core: "Màn sương tan, sự thật chiếu rọi.", psychology: "Vượt hoảng loạn, nhìn nhận rõ sự thật.", love: "Sáng tỏ hiểu lầm, cởi mở hơn.", career: "Vấn đề mập mờ được giải quyết rõ ràng.", action: "Đối diện trực diện với sự thật.", reflection: "Sự thật nào giúp tôi giải tỏa?" }
  },
  {
    id: "sun", name: "The Sun (XIX)", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    upright: { keywords: ["Niềm vui", "Thành công", "Rạng rỡ"], core: "Ánh sáng rực rỡ mang lại năng lượng tích cực.", psychology: "Tinh thần đỉnh cao, vui tươi, tự tin.", love: "Hạnh phúc viên mãn, thăng hoa.", career: "Thành công vang dội, tài chính khởi sắc.", action: "Tận hưởng, lan tỏa năng lượng tích cực.", reflection: "Điều gì mang lại niềm vui thuần khiết?" },
    reversed: { keywords: ["Chậm trễ", "U ám tạm thời", "Tự ti"], core: "Niềm vui bị che mờ bởi lo âu nhỏ nhặt.", psychology: "Tiềm năng nhưng hơi bi quan.", love: "Hiểu lầm nhỏ làm giảm nhiệt huyết.", career: "Thành công đến muộn hơn dự kiến.", action: "Gạt bỏ đám mây tiêu cực nhỏ nhặt.", reflection: "Đám mây nào đang che khuất niềm vui?" }
  },
  {
    id: "judgement", name: "Judgement (XX)", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    upright: { keywords: ["Thức tỉnh", "Sứ mệnh", "Tha thứ"], core: "Đáp tiếng gọi thức tỉnh rũ bỏ quá khứ.", psychology: "Đúc kết bài học, tha thứ cho bản thân.", love: "Nhìn nhận lại, tha thiết hàn gắn.", career: "Nhận ra định hướng thực sự cuộc đời.", action: "Dũng cảm đáp lại tiếng gọi bên trong.", reflection: "Tiếng gọi nào đang giục giã tôi?" },
    reversed: { keywords: ["Tự phán xét", "Hối tiếc", "Né tránh"], core: "Dằn vặt quá khứ, từ chối thay đổi.", psychology: "Khắc nghiệt với bản thân, sợ thay đổi.", love: "Trách móc, nhắc lỗi lầm cũ.", career: "Bỏ lỡ cơ hội thức tỉnh sự nghiệp.", action: "Thôi phán xét, tha thứ để bước tiếp.", reflection: "Dằn vặt nào đang giam cầm tôi?" }
  },
  {
    id: "world", name: "The World (XXI)", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    upright: { keywords: ["Hoàn thành", "Viên mãn", "Thành tựu"], core: "Khép lại vòng tròn lớn thành tựu rực rỡ.", psychology: "Hợp nhất thân tâm trí, chương mới mở ra.", love: "Cam kết vĩnh viên, hạnh phúc trọn vẹn.", career: "Hoàn thành xuất sắc, đỉnh cao danh vọng.", action: "Tự hào tận hưởng thành quả.", reflection: "Thành tựu lớn nhất tôi đạt được là gì?" },
    reversed: { keywords: ["Chưa trọn vẹn", "Trì hoãn", "Trống rỗng"], core: "Thiếu sót phút chót, chưa muốn khép lại.", psychology: "Còn lấn cấn chi tiết chưa ăn mừng trọn vẹn.", love: "Thiếu bước cam kết cuối cùng.", career: "Nghẽn ở bước bàn giao cuối.", action: "Giải quyết nốt chi tiết sót lại.", reflection: "Điều gì khiến tôi chưa thấy trọn vẹn?" }
  },

  // --- MINOR ARCANA ---
  {
    id: "ace_wands", name: "Ace of Wands", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    upright: { keywords: ["Cảm hứng mới", "Năng lượng", "Bùng nổ"], core: "Ngọn lửa đam mê bùng cháy khởi đầu mới.", psychology: "Sự nhiệt huyết dâng trào mạnh mẽ.", love: "Tình yêu sét đánh, đam mê thể xác.", career: "Dự án mới đầy triển vọng, khởi sắc.", action: "Hành động ngay khi có cảm hứng.", reflection: "Ngọn lửa đam mê nào đang sục sôi?" },
    reversed: { keywords: ["Mất phương hướng", "Trì trệ", "Thiếu lửa"], core: "Năng lượng bị dập tắt, thiếu động lực.", psychology: "Cảm giác chán nản, mất phương hướng.", love: "Sự nguội lạnh, thiếu kết nối nhiệt huyết.", career: "Dự án bị trì hoãn, hụt hẫng.", action: "Tìm kiếm lại nguồn cảm hứng ban đầu.", reflection: "Điều gì đã dập tắt ngọn lửa của tôi?" }
  },
  {
    id: "two_wands", name: "Two of Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
    upright: { keywords: ["Lên kế hoạch", "Tầm nhìn", "Quyết định"], core: "Đứng trước ngã rẽ hoạch định tương lai.", psychology: "Sẵn sàng vươn ra khỏi vùng an toàn.", love: "Cùng nhau định hướng tương lai dài hạn.", career: "Lên chiến lược bành trướng, đầu tư lớn.", action: "Vẽ bản đồ chi tiết trước khi xuất phát.", reflection: "Tầm nhìn xa nhất của tôi là gì?" },
    reversed: { keywords: ["Sợ rủi ro", "Thiếu chuẩn bị", "Do dự"], core: "Chần chừ không dám bước ra thế giới.", psychology: "Sợ hãi những ẩn số ngoài vùng an toàn.", love: "Bất đồng về kế hoạch tương lai.", career: "Bỏ lỡ cơ hội do quá do dự.", action: "Dám chấp nhận rủi ro tính toán trước.", reflection: "Tôi đang sợ hãi điều gì ở tương lai?" }
  },
  {
    id: "ace_cups", name: "Ace of Cups", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    upright: { keywords: ["Tình cảm dạt dào", "Trái tim rộng mở", "Hỷ sự"], core: "Chiếc cốc cảm xúc tràn trề tình yêu thương.", psychology: "Tâm hồn rộng mở, đón nhận sự chữa lành.", love: "Tình yêu mới ngọt ngào, thăng hoa cảm xúc.", career: "Công việc làm bằng đam mê, thuận lợi.", action: "Hãy sống thật chân thành với cảm xúc.", reflection: "Trái tim tôi đang muốn trao đi điều gì?" },
    reversed: { keywords: ["Kìm nén cảm xúc", "Trống rỗng", "Tổn thương"], core: "Chiếc cốc cảm xúc bị khô cạn hoặc kìm nén.", psychology: "Nỗi sợ bị tổn thương khiến bạn đóng cửa tim.", love: "Sự thất vọng, cảm giác cho đi không nhận lại.", career: "Thiếu cảm hứng, chán nản công việc.", action: "Học cách tự chữa lành và yêu bản thân.", reflection: "Tôi đang khóa chặt cảm xúc nào?" }
  },
  {
    id: "two_cups", name: "Two of Cups", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    upright: { keywords: ["Sự gắn kết", "Đối tác ăn ý", "Hòa hợp"], core: "Sự thấu cảm và liên kết sâu sắc giữa hai tâm hồn.", psychology: "Cảm giác tìm thấy 'tri kỷ' hoặc sự cân bằng.", love: "Tình yêu đôi lứa gắn kết, thấu hiểu tuyệt đối.", career: "Hợp tác kinh doanh cực kỳ ăn ý.", action: "Trân trọng và vun đắp mối quan hệ đối tác.", reflection: "Ai là người tôi có thể tin tưởng tuyệt đối?" },
    reversed: { keywords: ["Bất hòa", "Mất cân bằng", "Hiểu lầm"], core: "Rạn nứt kết nối, bất đồng quan điểm.", psychology: "Cái tôi lớn làm tổn thương sự gắn kết.", love: "Cãi vã, xa cách, mất tiếng nói chung.", career: "Hợp tác đổ vỡ do thiếu minh bạch.", action: "Hạ cái tôi xuống để lắng nghe nhau.", reflection: "Điều gì đang phá vỡ sự hòa hợp giữa chúng tôi?" }
  },
  {
    id: "ace_swords", name: "Ace of Swords", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    upright: { keywords: ["Sự minh bạch", "Ý tưởng sắc sảo", "Đột phá"], core: "Lưỡi gươm lý trí cắt đứt mọi mập mờ.", psychology: "Tư duy cực kỳ sắc bén, sáng suốt.", love: "Giao tiếp thẳng thắn, rõ ràng trắng đen.", career: "Ý tưởng thiên tài, giải quyết triệt để bế tắc.", action: "Dùng lý trí để giải quyết vấn đề.", reflection: "Sự thật nào cần được làm sáng tỏ?" },
    reversed: { keywords: ["Nhận thức sai lệch", "Lời nói sát thương", "Bối rối"], core: "Lý trí bị mờ hoặc dùng ngôn từ gây tổn thương.", psychology: "Suy nghĩ tiêu cực, tự huyễn hoặc bản thân.", love: "Lời nói cay nghiệt làm tổn thương đối phương.", career: "Ý tưởng viển vông, thiếu khả thi.", action: "Uốn lưỡi trước khi nói, suy xét kỹ lưỡng.", reflection: "Lời nói của tôi có đang làm tổn thương ai?" }
  },
  {
    id: "two_swords", name: "Two of Swords", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Swords02.jpg",
    upright: { keywords: ["Bế tắc", "Trì hoãn quyết định", "Bịt mắt"], core: "Cố tình né tránh đưa ra lựa chọn khó khăn.", psychology: "Dùng lý trí ngăn chặn cảm xúc để khỏi đau.", love: "Né tránh đối mặt với vấn đề cốt lõi.", career: "Đình trệ do chưa chịu đưa ra quyết định.", action: "Tháo băng bịt mắt, dũng cảm chọn lựa.", reflection: "Sự thật hiển nhiên nào tôi đang cố trốn tránh?" },
    reversed: { keywords: ["Vỡ lẽ", "Buộc phải chọn", "Hết né tránh"], core: "Sự thật phơi bày ép buộc phải ra quyết định.", psychology: "Hết đường trốn tránh, phải đối mặt thực tế.", love: "Bùng nổ cảm xúc sau thời gian kìm nén.", career: "Bắt buộc phải ký kết hoặc chọn ngã rẽ.", action: "Dũng cảm đối mặt với hậu quả lựa chọn.", reflection: "Tôi đã sẵn sàng mở mắt đón nhận sự thật?" }
  },
  {
    id: "ace_pentacles", name: "Ace of Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    upright: { keywords: ["Cơ hội vật chất", "Tài lộc", "Nền tảng vững"], core: "Hạt giống thịnh vượng và cơ hội tài chính mới.", psychology: "Cảm giác an toàn, thực tế và sẵn sàng xây dựng.", love: "Mối quan hệ thực tế, chăm sóc vật chất ổn định.", career: "Cơ hội việc làm lương cao, đầu tư sinh lời.", action: "Nắm bắt ngay cơ hội thực tế trước mắt.", reflection: "Tôi đang vun trồng hạt giống tài chính nào?" },
    reversed: { keywords: ["Bỏ lỡ cơ hội", "Thất thoát", "Thiếu thực tế"], core: "Cơ hội tài chính tuột mất do thiếu chuẩn bị.", psychology: "Lo lắng tiền bạc, quản lý tài chính kém.", love: "Mâu thuẫn chuyện tiền nong, vật chất.", career: "Đầu tư thua lỗ, bỏ lỡ dự án tốt.", action: "Thắt chặt chi tiêu, đánh giá lại thực tế.", reflection: "Tôi đã bỏ lỡ cơ hội thực tế nào vì mơ mộng?" }
  },
  {
    id: "two_pentacles", name: "Two of Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents02.jpg",
    upright: { keywords: ["Cân đối", "Đa nhiệm", "Linh hoạt tài chính"], core: "Uyển chuyển tung hứng giữa nhiều mục tiêu.", psychology: "Khả năng xoay sở tốt trong hoàn cảnh biến động.", love: "Cân bằng giữa tình yêu và công việc.", career: "Quản lý nhiều dự án cùng lúc thành công.", action: "Giữ tâm lý linh hoạt, uyển chuyển.", reflection: "Tôi có đang ôm đồm quá nhiều việc không?" },
    reversed: { keywords: ["Quá tải", "Mất cân bằng", "Kiệt sức"], core: "Ôm đồm quá nhiều dẫn đến sụp đổ hệ thống.", psychology: "Căng thẳng tột độ vì không xoay sở kịp.", love: "Bê trễ tình cảm vì quá bận rộn.", career: "Nợ nần, mất kiểm soát tài chính.", action: "Cắt bớt mục tiêu, tập trung ưu tiên cốt lõi.", reflection: "Điều gì đang khiến tôi mất kiểm soát nhịp sống?" }
  }
];