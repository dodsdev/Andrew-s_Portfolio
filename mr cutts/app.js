// Translation Dictionary
const translations = {
  // Navigation
  "nav_back_to_portfolio": { en: "Back to Portfolio", ar: "العودة للمعرض" },
  "nav_logo": { en: "Mr. Cutts Salon", ar: "صالون مستر كاتس" },
  "nav_home": { en: "Home", ar: "الرئيسية" },
  "nav_services": { en: "Services", ar: "خدماتنا" },
  "nav_gallery": { en: "Lookbook", ar: "ألبوم الصور" },
  "nav_contact": { en: "Contact", ar: "اتصل بنا" },
  "nav_toggle": { en: "العربية", ar: "English" },

  // Hero Section
  "hero_welcome": { en: "Welcome to Mr. Cutts Salon", ar: "مرحبًا بكم في صالون مستر كاتس" },
  "hero_title_1": { en: "Elevate Your", ar: "ارتقِ بمظهرك و" },
  "hero_title_2": { en: "Personal Style", ar: " اناقتك" },
  "hero_desc": { 
    en: "A premium grooming lounge for the modern gentleman. Experience sharp precision haircuts, refined beard care, and exclusive packages designed for your ultimate comfort.", 
    ar: "صالون حلاقة ورعاية شخصية فاخر للرجل العصري. اختبر دقة قصات الشعر، العناية الفائقة باللحية، وباقات السبا الحصرية المصممة لراحتك التامة." 
  },
  "hero_cta": { en: "Book Appointment", ar: "احجز موعدك الآن" },
  "hero_call": { en: "Call Us", ar: "اتصل بنا" },
  "hero_hours": { en: "Open Daily: 11:00 AM - 12:00 AM", ar: "مفتوح يوميًا: ١١:٠٠ ص - ١٢:٠٠ م" },

  // Features Bar
  "feat_barber_title": { en: "Master Barbers", ar: "حلاقين محترفين" },
  "feat_barber_desc": { en: "Top-tier styling experts", ar: "خبراء تصفيف على أعلى مستوى" },
  "feat_products_title": { en: "Premium Products", ar: "منتجات فاخرة" },
  "feat_products_desc": { en: "Organic, high-end grooming oils", ar: "زيوت وكريمات عضوية فاخرة" },
  "feat_lounge_title": { en: "Luxury Lounge", ar: "لاونج فاخر" },
  "feat_lounge_desc": { en: "Complimentary drinks & WiFi", ar: "مشروبات ضيافة وإنترنت مجاني" },

  // Services Section
  "services_title": { en: "Our Services", ar: "خدماتنا المميزة" },
  "services_subtitle": { en: "Tailored grooming experiences designed for the refined gentleman", ar: "تجارب حلاقة وعناية مخصصة ومصممة للرجل الأنيق" },
  "tab_haircuts": { en: "Haircuts", ar: "قص الشعر" },
  "tab_beard": { en: "Beard Care", ar: "العناية باللحية" },
  "tab_packages": { en: "Grooming Packages", ar: "باقات العناية المتكاملة" },

  // Services - Haircuts
  "service_h1_title": { en: "Signature Haircut", ar: "قصة الشعر المميزة" },
  "service_h1_desc": { en: "Classic scissor cut, modern crop or fade, styled to absolute perfection.", ar: "قصة كلاسيكية بالمقص، أو تدرج عصري (fade)، مصففة بشكل مثالي يناسب ملامحك." },
  "service_h2_title": { en: "Royal Hair & Wash", ar: "القص والغسيل الملكي" },
  "service_h2_desc": { en: "Premium haircut, invigorating hot stone head massage, luxury shampoo and blow-dry style.", ar: "قصة شعر مميزة، تدليك منشط للرأس بالأحجار الساخنة، غسيل فاخر وتصفيف وافي." },
  "service_h3_title": { en: "Buzz Cut & Blend", ar: "قص وتدريج سريع" },
  "service_h3_desc": { en: "Clean clipper cut with precision skin blend, line-up, and hot towel finish.", ar: "قص نظيف بالكامل بالماكينة مع دقة عالية وتحديد الأطراف مع لمسة المنشفة الساخنة." },

  // Services - Beard
  "service_b1_title": { en: "Royal Beard Trim", ar: "تحديد لحية ملكي" },
  "service_b1_desc": { en: "Beard trimming, double hot towel wrap, straight-razor outline, and organic oil massage.", ar: "تشذيب اللحية وتنسيقها، منشفة ساخنة مزدوجة، تحديد موس دقيق، وتدليك بالزيت العضوي." },
  "service_b2_title": { en: "Beard Dye & Groom", ar: "صبغ وتحديد اللحية" },
  "service_b2_desc": { en: "Precise trim with premium natural dye to cover gray hair and enhance beard density.", ar: "تشذيب دقيق للحية مع صبغ بمواد طبيعية فاخرة لتغطية الشيب وزيادة كثافة اللحية." },
  "service_b3_title": { en: "Traditional Hot Towel Shave", ar: "حلاقة كلاسيكية كاملة" },
  "service_b3_desc": { en: "Straight-razor shave with rich lather, continuous steam, hot towels, and soothing balm.", ar: "حلاقة كاملة بالموس التقليدي مع رغوة غنية، بخار مستمر، مناشف ساخنة، وبلسم مهدئ." },

  // Services - Packages
  "service_p1_title": { en: "The Gentleman's Ritual", ar: "طقوس الرجل النبيل" },
  "service_p1_desc": { en: "Signature Haircut + Royal Beard Trim + Charcoal Face Mask + Steam facial.", ar: "قصة الشعر المميزة + تحديد لحية ملكي + ماسك الفحم النشط للوجه + جلسة بخار للوجه." },
  "service_p2_title": { en: "Mr. Cutts Executive Lounge", ar: "باقة مستر كاتس الرئاسية" },
  "service_p2_desc": { en: "Royal Haircut & Wash + Hot Towel Shave + Deep Cleanse Scrub + Scalp Treatment.", ar: "قص وغسيل ملكي + حلاقة كاملة بالمنشفة الساخنة + سكراب تنظيف عميق للبشرة + علاج لفروة الرأس." },
  "service_p3_title": { en: "Wedding Grooming Pack", ar: "باقة العريس المتكاملة" },
  "service_p3_desc": { en: "Premium hair and beard styling, gold facial therapy, nose/ears waxing, manicure & hand massage.", ar: "تصفيف شعر ولحية فاخر، علاج الوجه بقناع الذهب، إزالة شعر الأنف والأذن بالشمع، مانيكير وتدليك يدين." },

  // Booking Card Labels
  "duration": { en: "min", ar: "دقيقة" },
  "price_curr": { en: "EGP", ar: "ج.م" },
  "btn_book_now": { en: "Book Now", ar: "احجز الآن" },

  // Gallery
  "gallery_title": { en: "Our Lookbook", ar: "معرض القصات والتصاميم" },
  "gallery_subtitle": { en: "Inspect our craftsmanship and premium grooming lounge vibe", ar: "شاهد دقة أعمالنا وتفاصيل صالوننا الفاخر" },
  "gallery_tag1": { en: "Classic Side-part", ar: "قصة كلاسيكية جانبية" },
  "gallery_tag2": { en: "Textured Crop Fade", ar: "تدرج عصري محدد" },
  "gallery_tag3": { en: "Premium Beard Grooming", ar: "عناية متكاملة باللحية" },

  // Contact Section
  "contact_title": { en: "Visit the Lounge", ar: "تفضل بزيارتنا" },
  "contact_subtitle": { en: "Experience unparalleled luxury grooming in Gardenia City", ar: "عش تجربة حلاقة فاخرة لا مثيل لها في جاردينيا سيتي" },
  "hours_title": { en: "Opening Hours", ar: "ساعات العمل" },
  "hours_weekdays": { en: "Saturday - Thursday", ar: "السبت - الخميس" },
  "hours_friday": { en: "Friday", ar: "الجمعة" },
  "address_title": { en: "Location", ar: "العنوان" },
  "address_detail": { en: "Gardenia City, Suez Road, Cairo, Egypt", ar: "كمبوند جاردينيا سيتي، طريق السويس، القاهرة، مصر" },
  "phone_title": { en: "Book via Phone", ar: "حجز عبر الهاتف" },
  "map_badge_title": { en: "Mr. Cutts Lounge", ar: "صالون مستر كاتس" },
  "map_badge_desc": { en: "Gardenia City, Cairo", ar: "جاردينيا سيتي، القاهرة" },
  "map_badge_btn": { en: "Directions in Maps", ar: "الاتجاهات في الخريطة" },
  "footer_rights": { en: "© 2026 Mr. Cutts Salon. All Rights Reserved. Designed for elite gentlemen.", ar: "© ٢٠٢٦ صالون مستر كاتس. جميع الحقوق محفوظة. صُمم للرجل النخبة." },

  // Modal General
  "modal_title": { en: "Book an Appointment", ar: "حجز موعد جديد" },
  "modal_step_1": { en: "Service", ar: "الخدمة" },
  "modal_step_2": { en: "Barber", ar: "الحلاق" },
  "modal_step_3": { en: "Date & Time", ar: "الوقت" },
  "modal_step_4": { en: "Details", ar: "التأكيد" },
  "modal_btn_next": { en: "Next Step", ar: "الخطوة التالية" },
  "modal_btn_back": { en: "Back", ar: "الرجوع" },
  "modal_btn_submit": { en: "Confirm Appointment", ar: "تأكيد الحجز النهائي" },

  // Modal Step 1: Select Service
  "select_service_label": { en: "Choose Your Grooming Treatment", ar: "اختر نوع الخدمة المطلوبة" },
  "select_service_placeholder": { en: "Select a service...", ar: "اختر خدمة من القائمة..." },

  // Modal Step 2: Select Barber
  "select_barber_label": { en: "Select Your Preferred Specialist", ar: "اختر خبير العناية المفضل لديك" },
  "barber_1_role": { en: "Master Barber (15+ Years Exp.)", ar: "حلاق رئيسي (خبرة +١٥ عامًا)" },
  "barber_2_role": { en: "Stylist Extraordinaire", ar: "أخصائي تصفيف وقصات عصرية" },
  "barber_3_role": { en: "Beard & Grooming Specialist", ar: "خبير العناية باللحية والبشرة" },
  "barber_any": { en: "Any Available Barber", ar: "أي حلاق متاح" },
  "barber_any_role": { en: "Fastest booking option", ar: "خيار الحجز الأسرع" },

  // Modal Step 3: Select Date & Time
  "select_datetime_label": { en: "Pick Date & Available Slot", ar: "حدد التاريخ وفترة الوقت المناسبة" },
  "select_date_label": { en: "Select Date", ar: "اختر التاريخ" },
  "select_time_label": { en: "Available Time Slots", ar: "فترات الوقت المتاحة" },

  // Modal Step 4: Contact details
  "details_label": { en: "Enter Contact Information", ar: "أدخل معلومات الاتصال لتأكيد حجزك" },
  "input_name_label": { en: "Full Name", ar: "الاسم بالكامل" },
  "input_name_placeholder": { en: "e.g. Youssef Ahmed", ar: "مثال: يوسف أحمد" },
  "input_phone_label": { en: "Phone Number", ar: "رقم الهاتف المحمول" },
  "input_phone_placeholder": { en: "e.g. +20 107 081 7900", ar: "مثال: ٠١٠٧٠٨١٧٩٠٠" },
  "summary_title": { en: "Booking Summary", ar: "ملخص حجزك" },
  "summary_service": { en: "Service:", ar: "الخدمة:" },
  "summary_barber": { en: "Specialist:", ar: "الخبير:" },
  "summary_datetime": { en: "Date & Time:", ar: "التاريخ والوقت:" },

  // Success Screen
  "success_title": { en: "Appointment Scheduled!", ar: "تم تأكيد حجزك بنجاح!" },
  "success_desc": { en: "We have reserved your slot. The salon has been notified via Telegram.", ar: "لقد حجزنا فترتك الخاصة. تم إبلاغ الصالون عبر تليجرام." },
  "success_ref": { en: "Booking Code:", ar: "رمز الحجز الخاص بك:" },
  "btn_done": { en: "Done", ar: "إغلاق" },

  // Errors / Warnings
  "err_service": { en: "Please select a service first.", ar: "برجاء اختيار الخدمة أولاً." },
  "err_barber": { en: "Please select a barber.", ar: "برجاء اختيار خبير العناية." },
  "err_time": { en: "Please pick an available time slot.", ar: "برجاء تحديد فترة وقت متاحة." },
  "err_name": { en: "Please enter your full name.", ar: "برجاء كتابة الاسم بالكامل." },
  "err_phone": { en: "Please enter a valid phone number.", ar: "برجاء إدخال رقم هاتف صحيح." },
  "err_api": { en: "Could not connect to booking server. Please try again.", ar: "تعذر الاتصال بخادم الحجز. برجاء المحاولة مرة أخرى." },
  "err_slot_taken": { en: "This slot was just booked. Please pick another time.", ar: "تم حجز هذه الفترة للتو. برجاء اختيار وقت آخر." },
  
  // Custom Booking Manager Extensions
  "nav_my_bookings": { en: "My Bookings", ar: "حجوزاتي" },
  "my_bookings_title": { en: "My Active Bookings", ar: "حجوزاتي النشطة" },
  "my_bookings_empty": { en: "You have no active appointments booked.", ar: "ليس لديك أي مواعيد نشطة محجوزة حالياً." },
  "btn_cancel_booking": { en: "Cancel Appointment", ar: "إلغاء الموعد" },
  "barber_val": { en: "Barber: ", ar: "الحلاق: " },
  "code_val": { en: "Code: ", ar: "الرمز: " },

  // Social
  "social_follow": { en: "Follow The Vibe", ar: "تابعنا" },

  // Loading states
  "loading_slots": { en: "Loading availability...", ar: "جاري تحميل المواعيد المتاحة..." },
  "loading_bookings": { en: "Loading your bookings...", ar: "جاري تحميل حجوزاتك..." },
  "loader_text": { en: "Confirming reservation details...", ar: "جاري تأكيد تفاصيل الحجز..." },
  "btn_copy_code": { en: "Copy Code", ar: "نسخ الرمز" },
  "copied_code": { en: "Copied!", ar: "تم النسخ!" }
};

const daysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysAr = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthsAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

// ─── API CONFIGURATION ──────────────────────────────────────────────
const API_URL = '';
// ─────────────────────────────────────────────────────────────────────

const ALL_TIME_SLOTS = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
  "11:00 PM", "11:30 PM"
];

function normalizeDateStr(dateStr) {
  if (!dateStr) return "";
  const trimmed = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }
  
  const months = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
  };
  
  const wordMonthMatch = trimmed.match(/([a-zA-Z]{3,9})\s+(\d{1,2})\s+(\d{4})/);
  if (wordMonthMatch) {
    const mName = wordMonthMatch[1].toLowerCase().substring(0, 3);
    const month = months[mName];
    if (month) {
      return `${wordMonthMatch[3]}-${String(month).padStart(2, '0')}-${String(wordMonthMatch[2]).padStart(2, '0')}`;
    }
  }

  const wordMonthMatch2 = trimmed.match(/(\d{1,2})\s+([a-zA-Z]{3,9})\s+(\d{4})/);
  if (wordMonthMatch2) {
    const mName = wordMonthMatch2[2].toLowerCase().substring(0, 3);
    const month = months[mName];
    if (month) {
      return `${wordMonthMatch2[3]}-${String(month).padStart(2, '0')}-${String(wordMonthMatch2[1]).padStart(2, '0')}`;
    }
  }
  
  const d = new Date(trimmed);
  if (!isNaN(d.getTime())) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  return trimmed;
}

function isTimeSlotInPast(timeStr) {
  const now = new Date();
  const match = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return false;
  
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  
  if (ampm === "PM" && hours < 12) hours += 12;
  else if (ampm === "AM" && hours === 12) hours = 0;
  
  const slotDate = new Date();
  slotDate.setHours(hours, minutes, 0, 0);
  
  return slotDate.getTime() < now.getTime();
}

function formatTimeForDisplay(timeStr, lang) {
  if (!timeStr) return "";
  if (lang !== "ar") return timeStr;
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return timeStr
    .replace("AM", "صباحًا")
    .replace("PM", "مساءً")
    .replace(/\d/g, d => arabicDigits[parseInt(d, 10)]);
}

function normalizeTimeTo12H(tStr) {
  if (!tStr) return "";
  let str = String(tStr).trim();
  
  // 1. Check if it's a long timestamp/date string containing time (e.g. "Sun Dec 31 1899 13:30:00 GMT+0200")
  if (str.includes("1899") || str.includes("1900") || (str.includes(":") && isNaN(str) && (str.includes("GMT") || str.includes("EEST") || str.includes("EET")))) {
    const match = str.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);
    if (match) {
      let hours = parseInt(match[1], 10);
      const minutes = match[2];
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours}:${minutes} ${ampm}`;
    }
  }
  
  // 2. Check if it already has AM/PM
  const ampmMatch = str.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (ampmMatch) {
    let hours = parseInt(ampmMatch[1], 10);
    const minutes = ampmMatch[2];
    const ampm = ampmMatch[3].toUpperCase();
    return `${hours}:${minutes} ${ampm}`;
  }

  // 3. Check if it's a plain 24-hour text string (e.g., "13:30" or "09:15")
  if (/^\d{1,2}:\d{2}$/.test(str)) {
    const parts = str.split(':');
    let hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  }
  
  return str.toUpperCase().replace(/\s+/g, ' ');
}

// State Variables
let currentLanguage = localStorage.getItem("mr_cuts_lang") || "en";
let currentStep = 1;
let selectedService = "";
let selectedBarber = "";
let selectedDate = "";
let selectedTime = "";

let cachedBookings = [];
let cachedBreaks = [];
let isLoadingBookings = false;

function getMyBookingIds() {
  try {
    const data = localStorage.getItem("mr_cuts_my_ids");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

async function getDynamicSlotsFromAPI(dateStr, barberStr) {
  try {
    const response = await fetch(`${API_URL}?date=${dateStr}&barber=${barberStr}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.slots)) {
      return data.slots;
    }
  } catch (e) {
    console.error("Dynamic slots lookup connection failed:", e);
  }
  return null;
}

function saveMyBookingId(id) {
  try {
    const ids = getMyBookingIds();
    ids.push(id);
    localStorage.setItem("mr_cuts_my_ids", JSON.stringify(ids));
  } catch (e) {}
}

function removeMyBookingId(id) {
  try {
    let ids = getMyBookingIds();
    ids = ids.filter(i => i !== id);
    localStorage.setItem("mr_cuts_my_ids", JSON.stringify(ids));
  } catch (e) {}
}

async function refreshBookings() {
  isLoadingBookings = true;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.success) {
      if (Array.isArray(data.bookings)) {
        cachedBookings = data.bookings.map(b => ({
          ...b,
          date: normalizeDateStr(b.date),
          time: normalizeTimeTo12H(b.time)
        }));
      }
      if (Array.isArray(data.breaks)) {
        cachedBreaks = data.breaks.map(b => ({
          ...b,
          date: normalizeDateStr(b.date),
          time: normalizeTimeTo12H(b.time)
        }));
      }
    }
  } catch (error) {
    console.error("Failed to fetch bookings from API:", error);
  }
  isLoadingBookings = false;
  return cachedBookings;
}

function getBookings() {
  return cachedBookings;
}

async function createBookingAPI(booking) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' }, 
      body: JSON.stringify({ action: 'create', booking: booking })
    });
    return await response.json();
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function cancelBookingAPI(bookingId) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'cancel', id: bookingId })
    });
    return await response.json();
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function isBarberBooked(bookings, date, time, barber) {
  const targetTimeNormalized = normalizeTimeTo12H(time);

  // 1. Check breaks first
  if (barber !== "any") {
    const hasBreak = cachedBreaks.some(b => 
      b.date === date && 
      normalizeTimeTo12H(b.time) === targetTimeNormalized && 
      b.barber.toLowerCase() === barber.toLowerCase()
    );
    if (hasBreak) return true;
  } else {
    // If "any" barber is requested, check if all 3 barbers are busy (either booked or on break)
    const totalBarbers = ['youssef', 'marcus', 'kareem'];
    const unavailableCount = totalBarbers.filter(bName => {
      const isBusy = bookings.some(b => b.date === date && normalizeTimeTo12H(b.time) === targetTimeNormalized && b.barber.toLowerCase() === bName && b.status !== "Cancelled");
      const hasBreak = cachedBreaks.some(b => b.date === date && normalizeTimeTo12H(b.time) === targetTimeNormalized && b.barber.toLowerCase() === bName);
      return isBusy || hasBreak;
    }).length;
    if (unavailableCount >= 3) return true;
  }

  // 2. Filter bookings (ignoring Cancelled)
  const bookingsAtSlot = bookings.filter(b => {
    return b.date === date && normalizeTimeTo12H(b.time) === targetTimeNormalized && b.status !== "Cancelled";
  });

  if (bookingsAtSlot.length >= 3) return true;
  if (barber !== "any") {
    return bookingsAtSlot.some(b => b.barber.toLowerCase() === barber.toLowerCase());
  }
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileMenu();
  initScrollEffects();
  initServiceTabs();
  initBookingModal();
  initMyBookings();
  refreshBookings();
});

function initLanguage() {
  const toggleBtn = document.getElementById("lang-toggle");
  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    localStorage.setItem("mr_cuts_lang", currentLanguage);
    applyLanguage(currentLanguage);
  });
  applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) toggleBtn.textContent = translations["nav_toggle"][lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) el.textContent = translations[key][lang];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(input => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (translations[key] && translations[key][lang]) input.placeholder = translations[key][lang];
  });

  populateServicesDropdown();
  renderAvailableDates();
  checkTimeSlotAvailability();
  updateSummarySection();
  renderMyBookingsList();
}

function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });

  mobileMenu.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
}

function initScrollEffects() {
  const header = document.getElementById("main-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("border-b", "border-amber-500/10", "bg-[#0B0F19]/95", "shadow-lg");
    } else {
      header.classList.remove("border-b", "border-amber-500/10", "bg-[#0B0F19]/95", "shadow-lg");
    }
  });
}

function initServiceTabs() {
  const tabs = document.querySelectorAll(".service-tab");
  const contents = document.querySelectorAll(".services-grid");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-category");
      tabs.forEach(t => {
        t.classList.remove("border-amber-500", "text-amber-500", "bg-amber-500/5");
        t.classList.add("border-transparent", "text-slate-400", "hover:text-slate-200");
      });
      tab.classList.add("border-amber-500", "text-amber-500", "bg-amber-500/5");
      tab.classList.remove("border-transparent", "text-slate-400", "hover:text-slate-200");

      contents.forEach(content => {
        if (content.id === `services-${targetCategory}`) {
          content.classList.remove("hidden");
          content.classList.add("grid");
        } else {
          content.classList.add("hidden");
          content.classList.remove("grid");
        }
      });
    });
  });
}

function initBookingModal() {
  const modal = document.getElementById("booking-modal");
  const openBtns = document.querySelectorAll(".btn-book-cta");
  const closeBtn = document.getElementById("close-modal-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  const backBtn = document.getElementById("modal-back-btn");
  const doneBtn = document.getElementById("modal-done-btn");

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      openBookingModal(btn.getAttribute("data-service-key") || "");
    });
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
    resetModalState();
  };

  closeBtn?.addEventListener("click", closeModal);
  doneBtn?.addEventListener("click", closeModal);
  document.getElementById("modal-backdrop")?.addEventListener("click", closeModal);

  nextBtn?.addEventListener("click", () => {
    if (validateCurrentStep()) goToStep(currentStep + 1);
  });

  backBtn?.addEventListener("click", () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  });

  document.getElementById("booking-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateCurrentStep()) submitBooking();
  });

  document.getElementById("booking-name")?.addEventListener("input", clearErrorMsg);
  document.getElementById("booking-phone")?.addEventListener("input", clearErrorMsg);

  initBarberSelection();
}

async function openBookingModal(serviceKey = "") {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  selectedTime = "";
  selectedDate = "";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  populateServicesDropdown();
  if (serviceKey) {
    selectedService = serviceKey;
    const dropdown = document.getElementById("booking-service-select");
    if (dropdown) dropdown.value = serviceKey;
  }
  goToStep(1);
  try {
    await refreshBookings();
  } catch (e) {}
  checkTimeSlotAvailability();
}

function populateServicesDropdown() {
  const dropdown = document.getElementById("booking-service-select");
  if (!dropdown) return;
  dropdown.innerHTML = "";
  
  const placeholderOpt = document.createElement("option");
  placeholderOpt.value = "";
  placeholderOpt.disabled = true;
  placeholderOpt.selected = !selectedService;
  placeholderOpt.textContent = translations["select_service_placeholder"][currentLanguage];
  dropdown.appendChild(placeholderOpt);

  const servicesList = [
    { key: "service_h1_title", price: "350 EGP / ٣٥٠ ج.م" },
    { key: "service_h2_title", price: "500 EGP / ٥٠٠ ج.م" },
    { key: "service_h3_title", price: "250 EGP / ٢٥٠ ج.م" },
    { key: "service_b1_title", price: "250 EGP / ٢٥٠ ج.م" },
    { key: "service_b2_title", price: "350 EGP / ٣٥٠ ج.م" },
    { key: "service_b3_title", price: "300 EGP / ٣٠٠ ج.م" },
    { key: "service_p1_title", price: "700 EGP / ٧٠٠ ج.م" },
    { key: "service_p2_title", price: "1100 EGP / ١١٠٠ ج.م" },
    { key: "service_p3_title", price: "2000 EGP / ٢٠٠٠ ج.م" }
  ];

  servicesList.forEach(srv => {
    const opt = document.createElement("option");
    opt.value = srv.key;
    opt.selected = selectedService === srv.key;
    opt.textContent = `${translations[srv.key][currentLanguage]} (${srv.price})`;
    dropdown.appendChild(opt);
  });

  dropdown.onchange = (e) => {
    selectedService = e.target.value;
    clearErrorMsg();
  };
}

function initBarberSelection() {
  const cards = document.querySelectorAll(".barber-select-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("border-amber-500", "bg-amber-500/10"));
      card.classList.add("border-amber-500", "bg-amber-500/10");
      selectedBarber = card.getAttribute("data-barber");
      clearErrorMsg();
    });
  });
}

function renderAvailableDates() {
  const container = document.getElementById("dates-grid");
  if (!container) return;
  container.innerHTML = "";
  const days = currentLanguage === "ar" ? daysAr : daysEn;
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + i);

    const dayName = days[futureDate.getDay()];
    const dayNum = futureDate.getDate();
    const monthName = currentLanguage === "ar" ? monthsAr[futureDate.getMonth()] : monthsEn[futureDate.getMonth()];
    const dateVal = `${futureDate.getFullYear()}-${String(futureDate.getMonth() + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

    const dateCard = document.createElement("button");
    dateCard.type = "button";
    dateCard.className = `p-3 rounded-xl border text-center transition flex flex-col items-center justify-center cursor-pointer flex-shrink-0 w-[72px] sm:w-auto sm:flex-1 ${
      selectedDate === dateVal ? "border-amber-500 bg-amber-500/10 text-white" : "border-slate-800 bg-[#0F1420] hover:border-slate-700 text-slate-300"
    }`;

    dateCard.innerHTML = `
      <span class="text-xs text-slate-400 font-normal">${dayName}</span>
      <span class="text-lg font-bold my-1 text-amber-500">${dayNum}</span>
      <span class="text-xs text-slate-400">${monthName}</span>
    `;

    dateCard.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(b => {
        b.classList.remove("border-amber-500", "bg-amber-500/10", "text-white");
        b.classList.add("border-slate-800", "bg-[#0F1420]", "hover:border-slate-700", "text-slate-300");
      });
      dateCard.classList.add("border-amber-500", "bg-amber-500/10", "text-white");
      selectedDate = dateVal;
      clearErrorMsg();
      checkTimeSlotAvailability();
    });
    container.appendChild(dateCard);
  }
}

function validateCurrentStep() {
  clearErrorMsg();
  if (currentStep === 1 && !selectedService) { showErrorMsg("err_service"); return false; }
  if (currentStep === 2 && !selectedBarber) { showErrorMsg("err_barber"); return false; }
  if (currentStep === 3 && (!selectedDate || !selectedTime)) { showErrorMsg("err_time"); return false; }
  if (currentStep === 4) {
    const nameInput = document.getElementById("booking-name");
    const phoneInput = document.getElementById("booking-phone");
    if (!nameInput?.value.trim()) { showErrorMsg("err_name"); nameInput?.focus(); return false; }
    if (!phoneInput?.value.trim() || phoneInput.value.replace(/\s+/g, '').length < 8) { showErrorMsg("err_phone"); phoneInput?.focus(); return false; }
  }
  return true;
}

function showErrorMsg(translationKey, customMsg = "") {
  const errorBox = document.getElementById("modal-error-box");
  if (errorBox) {
    if (customMsg) {
      errorBox.textContent = customMsg;
    } else {
      errorBox.textContent = translations[translationKey][currentLanguage];
    }
    errorBox.classList.remove("hidden");
  }
}

// Clear error
function clearErrorMsg() {
  const errorBox = document.getElementById("modal-error-box");
  if (errorBox) errorBox.classList.add("hidden");
}

async function goToStep(step) {
  currentStep = step;
  clearErrorMsg();
  if (step === 3) {
    // Refresh bookings from the sheet so we always have the latest availability
    try { await refreshBookings(); } catch (e) {}
    checkTimeSlotAvailability();
  }

  document.querySelectorAll(".step-indicator").forEach(ind => {
    const indStep = parseInt(ind.getAttribute("data-step"));
    const textCircle = ind.querySelector(".step-number");
    const line = ind.querySelector(".step-line");

    if (indStep < step) {
      textCircle.className = "step-number w-8 h-8 rounded-full flex items-center justify-center bg-amber-500 text-slate-950 font-bold border border-amber-500";
      textCircle.innerHTML = '<i class="fas fa-check text-xs"></i>';
      if (line) line.className = "step-line flex-1 h-0.5 bg-amber-500 mx-2";
    } else if (indStep === step) {
      textCircle.className = "step-number w-8 h-8 rounded-full flex items-center justify-center bg-slate-900 text-amber-500 font-bold border border-amber-500";
      textCircle.textContent = indStep;
      if (line) line.className = "step-line flex-1 h-0.5 bg-slate-800 mx-2";
    } else {
      textCircle.className = "step-number w-8 h-8 rounded-full flex items-center justify-center bg-[#0F1420] text-slate-500 border border-slate-800";
      textCircle.textContent = indStep;
      if (line) line.className = "step-line flex-1 h-0.5 bg-slate-800 mx-2";
    }
  });

  document.querySelectorAll(".modal-step-panel").forEach(panel => {
    if (parseInt(panel.getAttribute("data-step")) === step) panel.classList.remove("hidden");
    else panel.classList.add("hidden");
  });

  const backBtn = document.getElementById("modal-back-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  const submitBtn = document.getElementById("modal-submit-btn");

  if (step === 1) {
    backBtn.classList.add("invisible");
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  } else if (step === 4) {
    backBtn.classList.remove("invisible");
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    updateSummarySection();
  } else {
    backBtn.classList.remove("invisible");
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function updateSummarySection() {
  const srvLabel = document.getElementById("summary-service-val");
  const bbrLabel = document.getElementById("summary-barber-val");
  const dtLabel = document.getElementById("summary-datetime-val");
  if (!srvLabel) return;

  srvLabel.textContent = selectedService ? translations[selectedService][currentLanguage] : "";
  
  let barberText = "";
  if (selectedBarber === "youssef") barberText = currentLanguage === "ar" ? "يوسف" : "Youssef";
  else if (selectedBarber === "marcus") barberText = currentLanguage === "ar" ? "ماركوس" : "Marcus";
  else if (selectedBarber === "kareem") barberText = currentLanguage === "ar" ? "كريم" : "Kareem";
  else if (selectedBarber === "any") barberText = translations["barber_any"][currentLanguage];
  bbrLabel.textContent = barberText;

  if (selectedDate && selectedTime) {
    const dateObj = new Date(selectedDate);
    const day = dateObj.getDate();
    const dayName = currentLanguage === "ar" ? daysAr[dateObj.getDay()] : daysEn[dateObj.getDay()];
    const monthName = currentLanguage === "ar" ? monthsAr[dateObj.getMonth()] : monthsEn[dateObj.getMonth()];
    const formattedDate = currentLanguage === "ar" ? `${dayName}، ${day} ${monthName}` : `${dayName}, ${monthName} ${day}`;
    dtLabel.textContent = `${formattedDate} @ ${formatTimeForDisplay(selectedTime, currentLanguage)}`;
  }
}

function getBarberDisplayName(barberKey) {
  if (barberKey === "youssef") return "Youssef";
  if (barberKey === "marcus") return "Marcus";
  if (barberKey === "kareem") return "Kareem";
  return "Any Available";
}

async function submitBooking() {
  const loader = document.getElementById("modal-loader");
  const modalFormContainer = document.getElementById("modal-form-container");
  const successPanel = document.getElementById("modal-success-panel");
  const modalHeader = document.getElementById("modal-header-nav");
  const footer = document.getElementById("modal-footer");

  modalFormContainer.classList.add("hidden");
  modalHeader?.classList.add("hidden");
  footer?.classList.add("hidden");
  loader.classList.remove("hidden");

  const refCode = "MC-" + Math.floor(1000 + Math.random() * 9000);
  const newBooking = {
    id: refCode,
    service: selectedService,
    serviceName: translations[selectedService] ? translations[selectedService]["en"] : selectedService,
    barber: selectedBarber,
    barberName: getBarberDisplayName(selectedBarber),
    date: selectedDate,
    time: selectedTime,
    name: document.getElementById("booking-name").value.trim(),
    phone: document.getElementById("booking-phone").value.trim(),
    timestamp: new Date().getTime()
  };

  const result = await createBookingAPI(newBooking);
  if (result.success) {
    saveMyBookingId(refCode);
    await refreshBookings();
    loader.classList.add("hidden");
    successPanel?.classList.remove("hidden");
    const codeLabel = document.getElementById("booking-ref-code");
    if (codeLabel) codeLabel.textContent = refCode;
    renderMyBookingsList();
  } else {
    loader.classList.add("hidden");
    modalFormContainer?.classList.remove("hidden");
    modalHeader?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    if (result.error) {
      showErrorMsg("err_api", result.error);
    } else {
      showErrorMsg("err_api");
    }
  }
}

function resetModalState() {
  currentStep = 1;
  selectedService = "";
  selectedBarber = "";
  selectedDate = "";
  selectedTime = "";

  if (document.getElementById("booking-service-select")) document.getElementById("booking-service-select").value = "";
  if (document.getElementById("booking-name")) document.getElementById("booking-name").value = "";
  if (document.getElementById("booking-phone")) document.getElementById("booking-phone").value = "";

  document.querySelectorAll(".barber-select-card").forEach(c => c.classList.remove("border-amber-500", "bg-amber-500/10"));
  renderAvailableDates();

  const timeGrid = document.getElementById("time-slots-grid");
  if (timeGrid) timeGrid.innerHTML = "";

  document.getElementById("modal-form-container")?.classList.remove("hidden");
  document.getElementById("modal-header-nav")?.classList.remove("hidden");
  document.getElementById("modal-footer")?.classList.remove("hidden");
  document.getElementById("modal-loader")?.classList.add("hidden");
  document.getElementById("modal-success-panel")?.classList.add("hidden");
  clearErrorMsg();
}

function initMyBookings() {
  const modal = document.getElementById("my-bookings-modal");
  const openBtns = [document.getElementById("my-bookings-btn"), document.getElementById("my-bookings-btn-mobile")];
  const closeBtn = document.getElementById("close-my-bookings-btn");
  const backdrop = document.getElementById("my-bookings-backdrop");

  if (!modal) return;

  const openModal = async () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    const content = document.getElementById("my-bookings-content");
    if (content) {
      content.innerHTML = `<div class="text-center py-8 text-slate-500"><p class="text-sm">${translations["loading_bookings"][currentLanguage]}</p></div>`;
    }
    await refreshBookings();
    renderMyBookingsList();
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  };

  openBtns.forEach(btn => btn?.addEventListener("click", openModal));
  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
}

function renderMyBookingsList() {
  const content = document.getElementById("my-bookings-content");
  if (!content) return;

  const myIds = getMyBookingIds();
  const allBookings = getBookings();
  const myBookings = allBookings.filter(b => myIds.includes(b.id));

  if (myBookings.length === 0) {
    content.innerHTML = `<div class="text-center py-8 text-slate-500"><p class="text-sm">${translations["my_bookings_empty"][currentLanguage]}</p></div>`;
    return;
  }

  content.innerHTML = "";
  myBookings.forEach(booking => {
    let barberText = booking.barber;
    const dateObj = new Date(normalizeDateStr(booking.date));
    const day = dateObj.getDate();
    const card = document.createElement("div");
    card.className = "p-5 rounded-2xl border border-slate-800 bg-[#0F1420] flex flex-col justify-between sm:flex-row sm:items-center gap-4 hover:border-amber-500/30 transition duration-300";
    card.innerHTML = `
      <div class="space-y-1">
        <h4 class="font-bold text-white text-sm tracking-wide">${translations[booking.service] ? translations[booking.service][currentLanguage] : booking.service}</h4>
        <div class="text-xs text-slate-400">
          <p><span>${translations["barber_val"][currentLanguage]}</span> ${barberText}</p>
          <p class="text-amber-500">${day} @ ${formatTimeForDisplay(booking.time, currentLanguage)}</p>
          <p><span>${translations["code_val"][currentLanguage]}</span> <b>${booking.id}</b></p>
        </div>
      </div>
      <button onclick="cancelBooking('${booking.id}')" class="px-4 py-2 rounded-xl border border-red-500/20 hover:border-red-500 text-red-400 hover:text-white font-bold text-xs transition duration-300 cursor-pointer">
        ${translations["btn_cancel_booking"][currentLanguage]}
      </button>
    `;
    content.appendChild(card);
  });
}

window.cancelBooking = async function(bookingId) {
  const buttons = document.querySelectorAll(`[onclick="cancelBooking('${bookingId}')"]`);
  buttons.forEach(btn => { btn.disabled = true; btn.innerHTML = '...'; });
  const result = await cancelBookingAPI(bookingId);
  if (result.success) {
    removeMyBookingId(bookingId);
    await refreshBookings();
  }
  renderMyBookingsList();
  checkTimeSlotAvailability();
};

window.copyBookingCode = function() {
  const codeEl = document.getElementById("booking-ref-code");
  const iconEl = document.getElementById("copy-code-icon");
  const textEl = document.getElementById("copy-code-text");
  if (!codeEl) return;

  const code = codeEl.textContent.trim();
  navigator.clipboard.writeText(code).then(() => {
    // Show success feedback
    if (iconEl) { iconEl.className = "fas fa-check text-[10px]"; }
    if (textEl) { textEl.textContent = translations["copied_code"][currentLanguage]; }

    // Revert after 2 seconds
    setTimeout(() => {
      if (iconEl) { iconEl.className = "fas fa-copy text-[10px]"; }
      if (textEl) { textEl.textContent = translations["btn_copy_code"][currentLanguage]; }
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = code;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(textArea);

    if (iconEl) { iconEl.className = "fas fa-check text-[10px]"; }
    if (textEl) { textEl.textContent = translations["copied_code"][currentLanguage]; }
    setTimeout(() => {
      if (iconEl) { iconEl.className = "fas fa-copy text-[10px]"; }
      if (textEl) { textEl.textContent = translations["btn_copy_code"][currentLanguage]; }
    }, 2000);
  });
};

async function checkTimeSlotAvailability() {
  const container = document.getElementById("time-slots-grid");
  if (!container) return;

  container.innerHTML = "";
  if (!selectedDate || !selectedBarber) {
    const msg = document.createElement("div");
    msg.className = "col-span-full text-center py-4 text-xs text-slate-500 font-medium";
    msg.textContent = currentLanguage === "ar" ? "برجاء اختيار التاريخ والحلاق أولاً" : "Please select date and barber first.";
    container.appendChild(msg);
    return;
  }

  const loadingMsg = document.createElement("div");
  loadingMsg.className = "col-span-full text-center py-4 text-xs text-amber-500 font-medium";
  loadingMsg.textContent = translations["loading_slots"][currentLanguage];
  container.appendChild(loadingMsg);

  let liveSlots = null;
  try {
    liveSlots = await Promise.race([
      getDynamicSlotsFromAPI(selectedDate, selectedBarber),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2500))
    ]);
  } catch (timeoutOrError) {
    console.warn("Live API fallback triggered.");
  }

  container.innerHTML = "";
  const todayObj = new Date();
  const todayStr = `${todayObj.getFullYear()}-${String(todayObj.getMonth() + 1).padStart(2, '0')}-${String(todayObj.getDate()).padStart(2, '0')}`;
  const isToday = selectedDate === todayStr;

  const slotsToRender = ALL_TIME_SLOTS;
  const bookings = getBookings();

  slotsToRender.forEach(timeVal => {
    const isPast = isToday && isTimeSlotInPast(timeVal);
    let isBooked = isBarberBooked(bookings, selectedDate, timeVal, selectedBarber);
    
    if (liveSlots && !liveSlots.includes(timeVal)) {
      isBooked = true;
    }
    
    // Absolute static block for Youssef @ 11:00 PM on June 13, 2026
    if (selectedDate === "2026-06-13" && timeVal === "11:00 PM" && selectedBarber.toLowerCase() === "youssef") {
      isBooked = true;
    }
    
    const isAvailable = !isPast && !isBooked;
    const slotBtn = document.createElement("button");
    slotBtn.type = "button";
    slotBtn.textContent = formatTimeForDisplay(timeVal, currentLanguage);
    slotBtn.setAttribute("data-time", timeVal);

    if (!isAvailable) {
      slotBtn.disabled = true;
      slotBtn.className = "py-2.5 sm:py-3 rounded-xl border border-slate-900 bg-slate-950/40 text-xs sm:text-sm text-slate-600 font-semibold opacity-25 cursor-not-allowed text-center transition";
      if (selectedTime === timeVal) selectedTime = "";
    } else {
      slotBtn.disabled = false;
      const isSelected = selectedTime === timeVal;
      slotBtn.className = `py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition cursor-pointer ${
        isSelected ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-slate-800 bg-[#0F1420] text-slate-300 hover:border-slate-700"
      }`;

      slotBtn.addEventListener("click", () => {
        container.querySelectorAll("button").forEach(b => {
          if (!b.disabled) b.className = "py-2.5 sm:py-3 rounded-xl border border-slate-800 bg-[#0F1420] text-xs sm:text-sm text-slate-300 font-semibold hover:border-slate-700 text-center transition cursor-pointer";
        });
        slotBtn.className = "py-2.5 sm:py-3 rounded-xl border border-amber-500 bg-amber-500/10 text-xs sm:text-sm text-amber-400 font-semibold text-center transition cursor-pointer";
        selectedTime = timeVal;
        clearErrorMsg();
      });
    }
    container.appendChild(slotBtn);
  });

  const totalAvailableRendered = container.querySelectorAll("button:not([disabled])").length;
  if (totalAvailableRendered === 0) {
    container.innerHTML = "";
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "col-span-full text-center py-4 text-xs text-red-400 font-medium";
    emptyMsg.textContent = currentLanguage === "ar" ? "لا توجد مواعيد متاحة لهذا اليوم" : "No open slots available for this day.";
    container.appendChild(emptyMsg);
  }
}