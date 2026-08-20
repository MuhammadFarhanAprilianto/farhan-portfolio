import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles matching the exact look
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
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.black,
        spaceBefore=7,
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
        alignment=TA_CENTER,
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
        fontSize=8.5,
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

    story = []

    # Header
    story.append(Paragraph("Muhammad Farhan Aprilianto", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Jakarta, Indonesia | +62 857-3202-1121 | farhankey666@gmail.com", contact_style))
    story.append(Paragraph('LinkedIn: <font color="#0000ee"><u>www.linkedin.com/in/farhan2004</u></font>', contact_style))
    story.append(Spacer(1, 6))

    # SECTION: PERSONAL INFORMATION
    story.append(Paragraph("PERSONAL INFORMATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph(
        "Final-year Computer Science student (Semester 8) at Universitas Pancasila with dual expertise in Web Development and UI/UX Design. Experienced in designing user-centered interfaces in Figma and building responsive applications using Flutter, Next.js, Laravel, Tailwind CSS, Cloud Firestore, and Supabase. Proven track record in developing full-stack web and mobile applications for F&B POS systems, e-commerce platforms, automotive service management, and agricultural management systems.",
        body_text
    ))
    story.append(Spacer(1, 4))

    # SECTION: EDUCATION
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    
    edu_data = [
        [
            Paragraph("TEKNIK INFORMATIKA (COMPUTER SCIENCE)", item_title_left),
            Paragraph("September 2022 – 2026", ParagraphStyle('R', parent=item_title_right, alignment=2))
        ],
        [
            Paragraph("<i>Universitas Pancasila</i> | GPA: 3.33 / 4.00", item_subtitle),
            Paragraph("", item_subtitle)
        ]
    ]
    t_edu = Table(edu_data, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Spacer(1, 4))

    # SECTION: WORK EXPERIENCE
    story.append(Paragraph("WORK EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))

    # 1. MySkill Bootcamp
    exp1 = [
        [Paragraph("UI/UX Research & Design Intensive Bootcamp Participant", item_title_left), Paragraph("May – July 2023", ParagraphStyle('R1', parent=item_title_right, alignment=2))],
        [Paragraph("<i>MySkill.com</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t1 = Table(exp1, colWidths=[380, 160])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Mastered and applied UX Research methodologies, Information Architecture, Wireframing, High-Fidelity Prototyping, and Design Systems in Figma.", bullet_style))
    story.append(Paragraph("• Built UI/UX design portfolios through real-world case studies and industry-standard design workflows.", bullet_style))
    story.append(Spacer(1, 3))

    # 2. PT Global Aspect Technology
    exp2 = [
        [Paragraph("Web Developer Internship", item_title_left), Paragraph("February – June 2025", ParagraphStyle('R2', parent=item_title_right, alignment=2))],
        [Paragraph("<i>PT Global Aspect Technology</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t2 = Table(exp2, colWidths=[380, 160])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed high-fidelity UI/UX wireframes and mockups in Figma to ensure intuitive and responsive web user flows.", bullet_style))
    story.append(Paragraph("• Implemented web interfaces using Laravel framework, Blade Templating, and Tailwind CSS.", bullet_style))
    story.append(Paragraph("• Managed web hosting, application deployment on Hostinger, and MySQL database configuration.", bullet_style))
    story.append(Paragraph("• Compiled internal technical documentation and presented final project deliverables to the development team.", bullet_style))
    story.append(Spacer(1, 3))

    # 3. Nyapah Banyu
    exp3 = [
        [Paragraph("Full-Stack Web Developer & System Analyst", item_title_left), Paragraph("August 2025 – January 2026", ParagraphStyle('R3', parent=item_title_right, alignment=2))],
        [Paragraph("<i>Research Developer Independent – Nyapah Banyu (Agricultural Operations Web System)</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t3 = Table(exp3, colWidths=[380, 160])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Architected system design and engineered an integrated web application for plantation operational management using Laravel Framework, PHP, and MySQL.", bullet_style))
    story.append(Paragraph("• Built responsive multi-dashboard web interfaces (Owner, Field Manager, & Crop Commodity views) using Blade Templating and CSS.", bullet_style))
    story.append(Paragraph("• Developed comprehensive operational modules including nursery management, planting schedules, harvest tracking, logistics, HR/payroll, and real-time activity logs.", bullet_style))
    story.append(Paragraph("• Implemented automated report generation and data export features to streamline management decision-making.", bullet_style))
    story.append(Spacer(1, 3))

    # 4. NOXICK Studio
    exp4 = [
        [Paragraph("Full-Stack Web Developer & UI/UX Designer", item_title_left), Paragraph("January – April 2026", ParagraphStyle('R4', parent=item_title_right, alignment=2))],
        [Paragraph("<i>Research Developer Independent – NOXICK Studio (Custom Apparel E-Commerce Platform)</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t4 = Table(exp4, colWidths=[380, 160])
    t4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed and engineered a digital design studio & e-commerce platform (NOXICK Streetwear) using Next.js 16 (App Router), React 19, Tailwind CSS, and MySQL.", bullet_style))
    story.append(Paragraph("• Integrated Midtrans Payment Gateway client to process automated down payments (DP) and full transaction settlements.", bullet_style))
    story.append(Paragraph("• Implemented secure user authentication using JWT (JSON Web Token) & bcryptjs, along with a custom order management dashboard for admin/developers.", bullet_style))
    story.append(Paragraph("• Created a modern streetwear-style digital store interface in Figma and translated it into interactive, responsive web components.", bullet_style))
    story.append(Spacer(1, 3))

    # 5. GadoGado_App
    exp5 = [
        [Paragraph("Lead Mobile Developer & UI/UX Designer", item_title_left), Paragraph("February – July 2026", ParagraphStyle('R5', parent=item_title_right, alignment=2))],
        [Paragraph("<i>Research Developer Independent – GadoGado_App (F&B POS & Inventory System)</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t5 = Table(exp5, colWidths=[380, 160])
    t5.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t5)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed UI/UX user flows, interactive wireframes, and system architecture (UML & ERD) for an Android-based digital Point of Sale (POS) system.", bullet_style))
    story.append(Paragraph("• Developed cross-platform mobile app using Flutter, Cloud Firestore, and Supabase Storage featuring automatic raw material inventory deduction based on menu recipes.", bullet_style))
    story.append(Paragraph("• Built real-time delivery status tracking and visual sales report dashboards with PDF export capability.", bullet_style))
    story.append(Spacer(1, 3))

    # 6. Gendut Garage 1.0
    exp6 = [
        [Paragraph("Full-Stack Mobile Developer & UI/UX Designer", item_title_left), Paragraph("February – June 2026", ParagraphStyle('R6', parent=item_title_right, alignment=2))],
        [Paragraph("<i>Research Developer Independent – Gendut Garage 1.0 (Automotive Workshop Mobile App)</i>", item_subtitle), Paragraph("", item_subtitle)]
    ]
    t6 = Table(exp6, colWidths=[380, 160])
    t6.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t6)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Designed and built an automotive workshop management mobile application (Gendut Garage 1.0) using Flutter (Dart) and Supabase Backend.", bullet_style))
    story.append(Paragraph("• Engineered Provider state management architecture and multi-role access control (Owner, Mechanic/Cashier, and Customer).", bullet_style))
    story.append(Paragraph("• Developed end-to-end transaction modules covering service booking, mechanic job dispatching, spare part inventory, and in-app PDF invoice generation & printing.", bullet_style))
    story.append(Paragraph("• Designed 10+ UI/UX wireframes in Figma and translated them into responsive mobile UI components.", bullet_style))
    story.append(Spacer(1, 4))

    # SECTION: ORGANIZATIONAL EXPERIENCE
    story.append(Paragraph("ORGANIZATIONAL EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("<i>Senat Mahasiswa (SEMA), Universitas Pancasila</i>", item_subtitle))
    story.append(Spacer(1, 2))

    org1 = [
        [Paragraph("Project Leader – Study Tour (STUBAN)", item_title_left), Paragraph("March 02, 2024", ParagraphStyle('RO1', parent=item_title_right, alignment=2))]
    ]
    to1 = Table(org1, colWidths=[380, 160])
    to1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(to1)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Led strategic planning, agenda formulation, and cross-university execution for student exchange programs involving all SEMA board members.", bullet_style))
    story.append(Paragraph("• Managed inter-organizational communication and presented official accountability reports (LPJ) and evaluation summaries to the Faculty Dean and Department Heads.", bullet_style))
    story.append(Paragraph("• Facilitated presentation sessions, interactive Q&A discussions, and participant feedback collection to formulate actionable recommendations for future programs.", bullet_style))
    story.append(Spacer(1, 3))

    org2 = [
        [Paragraph("Visual Design & Entrepreneurship Division Member", item_title_left), Paragraph("December 13, 2023 – October 03, 2024", ParagraphStyle('RO2', parent=item_title_right, alignment=2))]
    ]
    to2 = Table(org2, colWidths=[380, 160])
    to2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(to2)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Produced 20+ creative visual assets (event flyers, banners, certificates, and sponsorship proposals) using Figma & Canva to enhance organizational branding.", bullet_style))
    story.append(Paragraph("• Managed social media content calendars and scheduled regular posts on official SEMA channels to boost student engagement and awareness.", bullet_style))
    story.append(Paragraph("• Collaborated on entrepreneurial strategies to design and market promotional materials for internal organization funding.", bullet_style))
    story.append(Spacer(1, 4))

    # SECTION: SKILLS & COMPETENCIES
    story.append(Paragraph("SKILLS & COMPETENCIES", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("• <b>Web Development:</b> Next.js (React), Laravel (PHP), HTML5/CSS3, Tailwind CSS, Blade Templating, RESTful API, JavaScript", bullet_style))
    story.append(Paragraph("• <b>Mobile Development:</b> Flutter, Dart, Cross-Platform App Development, Provider State Management", bullet_style))
    story.append(Paragraph("• <b>UI/UX & Visual Design:</b> Figma (Wireframing, High-Fidelity Prototyping, Design Systems), User Research, Canva, CapCut", bullet_style))
    story.append(Paragraph("• <b>Backend & Database:</b> MySQL, Cloud Firestore (Firebase), Supabase, JWT Authentication, Midtrans Payment Gateway Integration", bullet_style))
    story.append(Paragraph("• <b>Tools & Environment:</b> Visual Studio Code, Git/GitHub, Hostinger (Web Hosting), Draw.io, Microsoft Office", bullet_style))
    story.append(Paragraph("• <b>Soft Skills:</b> Organizational Leadership, System Analysis (UML/SRS), Effective Communication, Time Management, Teamwork", bullet_style))
    story.append(Paragraph("• <b>Languages:</b> Indonesian (Native), English (Working Proficiency / Basic)", bullet_style))

    doc.build(story)

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(base_dir, 'public')
    build_pdf(os.path.join(public_dir, 'CV_Muhammad_Farhan_Aprilianto.pdf'))
    build_pdf(os.path.join(public_dir, 'resume.pdf'))
    print("PDF generated successfully!")
