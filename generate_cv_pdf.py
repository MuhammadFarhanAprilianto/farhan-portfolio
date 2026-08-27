import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT

def build_pdf(filename):
    # Letter size is 612 x 792 pt. With 36pt margins, usable width is 540 pt.
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom typography matching the resume style
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=18,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=2
    )

    item_title_left = ParagraphStyle(
        'ItemTitleLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.black
    )

    item_title_right = ParagraphStyle(
        'ItemTitleRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        alignment=TA_RIGHT,
        textColor=colors.black
    )

    item_subtitle = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#222222')
    )

    body_text = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.5,
        alignment=TA_JUSTIFY,
        textColor=colors.black
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        alignment=TA_LEFT,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2,
        textColor=colors.black
    )

    def create_item_header(title, date_str, subtitle=""):
        data = [
            [
                Paragraph(title, item_title_left),
                Paragraph(date_str, item_title_right)
            ]
        ]
        if subtitle:
            data.append([
                Paragraph(subtitle, item_subtitle),
                Paragraph("", item_subtitle)
            ])
        
        t = Table(data, colWidths=[385, 155])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('PADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0)
        ]))
        return t

    story = []

    # ==================== HEADER ====================
    story.append(Paragraph("Muhammad Farhan Aprilianto", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Jakarta, Indonesia | +62 857-3202-1121 | farhankey666@gmail.com", contact_style))
    story.append(Paragraph('LinkedIn: linkedin.com/in/farhan2004 | GitHub: github.com/MuhammadFarhanAprilianto', contact_style))
    story.append(Spacer(1, 5))

    # ==================== PERSONAL SUMMARY ====================
    story.append(Paragraph("PERSONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph(
        "Final-year Computer Science student (Semester 8) at Universitas Pancasila with dual expertise in Front-End / Web Development, "
        "Mobile Development, and UI/UX Design. Highly proficient in designing user-centered interfaces in Figma and building "
        "high-performance responsive applications using Next.js 16 (React 19), TypeScript, Tailwind CSS v4, Three.js (WebGL 3D), Flutter, "
        "Laravel, MongoDB Atlas Cloud, and Supabase. Proven track record in engineering production-grade web and mobile solutions for "
        "creative digital studios, Islamic education platforms, F&B POS systems, e-commerce platforms, and agricultural operational systems.",
        body_text
    ))
    story.append(Spacer(1, 3))

    # ==================== EDUCATION ====================
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(create_item_header(
        "TEKNIK INFORMATIKA (COMPUTER SCIENCE)",
        "September 2022 – 2026",
        "Universitas Pancasila | GPA: 3.33 / 4.00"
    ))
    story.append(Spacer(1, 4))

    # ==================== WORK & PROJECT EXPERIENCE ====================
    story.append(Paragraph("WORK & PROJECT EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))

    # 1. LabsStdio
    story.append(create_item_header(
        "Front-End / Creative Web Developer & UI/UX Designer",
        "July – August 2026",
        "Research Developer Independent – LabsStdio (Creative Studio & Web Platform)"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed and engineered a modern creative digital studio platform and interactive portfolio showcase utilizing Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.", bullet_style))
    story.append(Paragraph("• Built interactive 3D WebGL particle wave and dynamic handshake dot-matrix background animations using Three.js and custom canvas shaders.", bullet_style))
    story.append(Paragraph("• Implemented ultra-smooth kinetic scrolling with Lenis and scroll-triggered micro-interactions using Framer Motion, including expanding video cards, service carousels, and portfolio showcases.", bullet_style))
    story.append(Spacer(1, 3))

    # 2. MUQI
    story.append(create_item_header(
        "Lead Mobile Developer & UI/UX Designer",
        "June – August 2026",
        "Research Developer Independent – MUQI (Mobile Islamic & Tahfizh Learning App)"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed UI/UX user flows, interactive mobile wireframes in Figma, and complete system architecture supporting dual-portal access (Guru/Asatidz & Wali Murid).", bullet_style))
    story.append(Paragraph("• Developed cross-platform mobile application using Flutter (Dart) and MongoDB Atlas Cloud Database (TLS 1.3/SSL encryption) for real-time tahfizh assessment, attendance, and daily mutaba'ah tracking.", bullet_style))
    story.append(Paragraph("• Implemented custom Murottal audio player (speed control & duration slider), SHA-256 secure authentication, gamified achievement badges, and automated official student report card (Rapor) PDF export.", bullet_style))
    story.append(Spacer(1, 3))

    # 3. GadoGado_App
    story.append(create_item_header(
        "Lead Mobile Developer & UI/UX Designer",
        "February – July 2026",
        "Research Developer Independent – GadoGado_App (F&B POS & Inventory System)"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed UI/UX user flows, interactive wireframes, and system architecture (UML & ERD) for an Android-based digital Point of Sale (POS) system.", bullet_style))
    story.append(Paragraph("• Developed cross-platform mobile app using Flutter, Cloud Firestore, and Supabase Storage featuring automatic raw material inventory deduction based on menu recipes.", bullet_style))
    story.append(Paragraph("• Built real-time delivery status tracking and visual sales report dashboards with PDF export capability.", bullet_style))
    story.append(Spacer(1, 3))

    # 4. NOXICK Studio
    story.append(create_item_header(
        "Full-Stack Web Developer & UI/UX Designer",
        "January – April 2026",
        "Research Developer Independent – NOXICK Studio (Custom Apparel E-Commerce Platform)"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed and engineered a digital design studio & e-commerce platform (NOXICK Streetwear) using Next.js 16 (App Router), React 19, Tailwind CSS, and MySQL.", bullet_style))
    story.append(Paragraph("• Integrated Midtrans Payment Gateway client to process automated down payments (DP) and full transaction settlements.", bullet_style))
    story.append(Paragraph("• Implemented secure user authentication using JWT (JSON Web Token) & bcryptjs, along with a custom order management dashboard for admin/developers.", bullet_style))
    story.append(Paragraph("• Created a modern streetwear-style digital store interface in Figma and translated it into interactive, responsive web components.", bullet_style))
    story.append(Spacer(1, 3))

    # 5. Nyapah Banyu
    story.append(create_item_header(
        "Full-Stack Web Developer & System Analyst",
        "August 2025 – January 2026",
        "Research Developer Independent – Nyapah Banyu (Agricultural Operations Web System)"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Architected system design and engineered an integrated web application for plantation operational management using Laravel Framework, PHP, and MySQL.", bullet_style))
    story.append(Paragraph("• Built responsive multi-dashboard web interfaces (Owner, Field Manager, & Crop Commodity views) using Blade Templating and CSS.", bullet_style))
    story.append(Paragraph("• Developed comprehensive operational modules including nursery management, planting schedules, harvest tracking, logistics, HR/payroll, and real-time activity logs.", bullet_style))
    story.append(Paragraph("• Implemented automated report generation and data export features to streamline management decision-making.", bullet_style))
    story.append(Spacer(1, 3))

    # 6. PT Global Aspect Technology
    story.append(create_item_header(
        "Web Developer Internship",
        "February – June 2025",
        "PT Global Aspect Technology"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed high-fidelity UI/UX wireframes and mockups in Figma to ensure intuitive and responsive web user flows.", bullet_style))
    story.append(Paragraph("• Implemented web interfaces using Laravel framework, Blade Templating, and Tailwind CSS.", bullet_style))
    story.append(Paragraph("• Managed web hosting, application deployment on Hostinger, and MySQL database configuration.", bullet_style))
    story.append(Paragraph("• Compiled internal technical documentation and presented final project deliverables to the development team.", bullet_style))
    story.append(Spacer(1, 3))

    # 7. MySkill Bootcamp
    story.append(create_item_header(
        "UI/UX Research & Design Intensive Bootcamp Participant",
        "May – July 2023",
        "MySkill.com"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Mastered and applied UX Research methodologies, Information Architecture, Wireframing, High-Fidelity Prototyping, and Design Systems in Figma.", bullet_style))
    story.append(Paragraph("• Built UI/UX design portfolios through real-world case studies and industry-standard design workflows.", bullet_style))
    story.append(Spacer(1, 4))

    # ==================== ORGANIZATIONAL EXPERIENCE ====================
    story.append(Paragraph("ORGANIZATIONAL EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("<i>Senat Mahasiswa (SEMA), Universitas Pancasila</i>", item_subtitle))
    story.append(Spacer(1, 2))

    story.append(create_item_header(
        "Project Leader – Study Tour (STUBAN)",
        "March 02, 2024"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Led strategic planning, agenda formulation, and cross-university execution for student exchange programs involving all SEMA board members.", bullet_style))
    story.append(Paragraph("• Managed inter-organizational communication and presented official accountability reports (LPJ) and evaluation summaries to the Faculty Dean and Department Heads.", bullet_style))
    story.append(Paragraph("• Facilitated presentation sessions, interactive Q&A discussions, and participant feedback collection to formulate actionable recommendations for future programs.", bullet_style))
    story.append(Spacer(1, 3))

    story.append(create_item_header(
        "Visual Design & Entrepreneurship Division Member",
        "December 13, 2023 – October 03, 2024"
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Produced 20+ creative visual assets (event flyers, banners, certificates, and sponsorship proposals) using Figma & Canva to enhance organizational branding.", bullet_style))
    story.append(Paragraph("• Managed social media content calendars and scheduled regular posts on official SEMA channels to boost student engagement and awareness.", bullet_style))
    story.append(Paragraph("• Collaborated on entrepreneurial strategies to design and market promotional materials for internal organization funding.", bullet_style))
    story.append(Spacer(1, 4))

    # ==================== SKILLS & COMPETENCIES ====================
    story.append(Paragraph("SKILLS & COMPETENCIES", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("• <b>Web Development:</b> Next.js 16 (React 19), TypeScript, Tailwind CSS v4, Three.js (WebGL 3D), Framer Motion, Lenis Smooth Scroll, Laravel (PHP), HTML5/CSS3, Blade Templating, RESTful API, JavaScript", bullet_style))
    story.append(Paragraph("• <b>Mobile Development:</b> Flutter, Dart, Cross-Platform App Development, Provider State Management, Audio Player & TTS Integration", bullet_style))
    story.append(Paragraph("• <b>UI/UX & Visual Design:</b> Figma (Wireframing, High-Fidelity Prototyping, Design Systems), User Research, Canva, CapCut", bullet_style))
    story.append(Paragraph("• <b>Backend & Database:</b> MongoDB Atlas Cloud, MySQL, Cloud Firestore (Firebase), Supabase, JWT Authentication, SHA-256 Hashing, Midtrans Payment Gateway Integration", bullet_style))
    story.append(Paragraph("• <b>Tools & Environment:</b> Antigravity IDE, Visual Studio Code, Git/GitHub, Hostinger (Web Hosting), Draw.io, Microsoft Office", bullet_style))
    story.append(Paragraph("• <b>Soft Skills:</b> Organizational Leadership, System Analysis (UML/SRS), Effective Communication, Time Management, Teamwork", bullet_style))
    story.append(Paragraph("• <b>Languages:</b> Indonesian (Native), English (Working Proficiency / Basic)", bullet_style))

    doc.build(story)

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(base_dir, 'public')
    build_pdf(os.path.join(public_dir, 'CV_Muhammad_Farhan_Aprilianto.pdf'))
    build_pdf(os.path.join(public_dir, 'resume.pdf'))
    print("PDF generated successfully!")
