import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:responsive_builder/responsive_builder.dart';
import '../widgets/glass_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildHeroSection(context),
            const SizedBox(height: 100),
            _buildAboutSection(context),
            const SizedBox(height: 100),
            _buildSkillsSection(context),
            const SizedBox(height: 100),
            _buildProjectsSection(context),
            const SizedBox(height: 100),
            _buildContactSection(context),
          ],
        ),
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    return Container(
      constraints: BoxConstraints(minHeight: MediaQuery.of(context).size.height),
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType<double>(
          context: context,
          mobile: 24,
          tablet: 64,
          desktop: 120,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Hi, my name is',
            style: GoogleFonts.inter(
              color: Theme.of(context).primaryColor,
              fontSize: 18,
              fontWeight: FontWeight.w500,
              letterSpacing: 2,
            ),
          ).animate().fadeIn(duration: 600.ms, delay: 200.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 20),
          Text(
            'Moataz.', // Replace with actual name if different
            style: Theme.of(context).textTheme.displayLarge?.copyWith(
                  fontSize: getValueForScreenType<double>(
                    context: context,
                    mobile: 50,
                    tablet: 70,
                    desktop: 90,
                  ),
                ),
          ).animate().fadeIn(duration: 600.ms, delay: 400.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 10),
          Text(
            'I build elegant digital experiences.',
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  color: const Color(0xFF8892B0),
                  fontSize: getValueForScreenType<double>(
                    context: context,
                    mobile: 40,
                    tablet: 60,
                    desktop: 70,
                  ),
                ),
          ).animate().fadeIn(duration: 600.ms, delay: 600.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 30),
          SizedBox(
            width: getValueForScreenType<double>(
              context: context,
              mobile: double.infinity,
              tablet: 600,
              desktop: 600,
            ),
            child: Text(
              'I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am focused on building accessible, human-centered products.',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    fontSize: 18,
                    height: 1.6,
                  ),
            ),
          ).animate().fadeIn(duration: 600.ms, delay: 800.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 50),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.transparent,
              foregroundColor: Theme.of(context).primaryColor,
              side: BorderSide(color: Theme.of(context).primaryColor, width: 2),
              padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 24),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              elevation: 0,
            ),
            child: Text(
              'Check out my work!',
              style: GoogleFonts.inter(
                fontSize: 16,
                letterSpacing: 1.5,
                fontWeight: FontWeight.w600,
              ),
            ),
          ).animate().fadeIn(duration: 600.ms, delay: 1000.ms).slideY(begin: 0.2, end: 0),
        ],
      ),
    );
  }

  Widget _buildAboutSection(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType<double>(
          context: context,
          mobile: 24,
          tablet: 64,
          desktop: 120,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                '01. ',
                style: GoogleFonts.inter(
                  color: Theme.of(context).primaryColor,
                  fontSize: 24,
                  fontWeight: FontWeight.w400,
                ),
              ),
              Expanded(
                flex: 2,
                child: Text(
                  'About Me',
                  style: Theme.of(context).textTheme.displayMedium?.copyWith(
                        fontSize: 32,
                      ),
                ),
              ),
              const SizedBox(width: 20),
              Expanded(
                flex: 3,
                child: Container(
                  height: 1,
                  color: const Color(0xFF233554),
                ),
              ),
            ],
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.1, end: 0),
          const SizedBox(height: 40),
          ResponsiveBuilder(
            builder: (context, sizingInformation) {
              if (sizingInformation.deviceScreenType == DeviceScreenType.desktop) {
                return Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(flex: 3, child: _buildAboutText(context)),
                    const SizedBox(width: 50),
                    Expanded(flex: 2, child: _buildAboutImage()),
                  ],
                );
              }
              return Column(
                children: [
                  _buildAboutText(context),
                  const SizedBox(height: 50),
                  _buildAboutImage(),
                ],
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _buildAboutText(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Hello! My name is Moataz and I enjoy creating things that live on the internet. My interest in software development started back in [Year] when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about about design and functionality!',
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
        ),
        const SizedBox(height: 20),
        Text(
          'Fast-forward to today, and I\'ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.',
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
        ),
      ],
    ).animate().fadeIn(duration: 800.ms, delay: 200.ms);
  }

  Widget _buildAboutImage() {
    return GlassCard(
      padding: EdgeInsets.zero,
      child: AspectRatio(
        aspectRatio: 1,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            color: const Color(0xFF6C63FF).withValues(alpha: 0.2), // Indigo tint
          ),
          child: const Center(
            child: Icon(Icons.person_outline, size: 120, color: Color(0xFFD4AF37)),
          ),
        ),
      ),
    ).animate().fadeIn(duration: 800.ms, delay: 400.ms).scale(begin: const Offset(0.9, 0.9), end: const Offset(1, 1));
  }

  Widget _buildSkillsSection(BuildContext context) {
    final skills = ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git', 'UI/UX Design'];
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType<double>(context: context, mobile: 24, tablet: 64, desktop: 120),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text('02. ', style: GoogleFonts.inter(color: Theme.of(context).primaryColor, fontSize: 24)),
              Expanded(
                flex: 2,
                child: Text('My Tools', style: Theme.of(context).textTheme.displayMedium?.copyWith(fontSize: 32)),
              ),
              const SizedBox(width: 20),
              Expanded(flex: 3, child: Container(height: 1, color: const Color(0xFF233554))),
            ],
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.1, end: 0),
          const SizedBox(height: 40),
          Wrap(
            spacing: 15,
            runSpacing: 15,
            children: skills.map((skill) {
              return Container(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                decoration: BoxDecoration(
                  color: const Color(0xFF1E1E24),
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(color: Theme.of(context).primaryColor.withValues(alpha: 0.5)),
                ),
                child: Text(
                  skill,
                  style: GoogleFonts.inter(color: Colors.white, fontWeight: FontWeight.w500),
                ),
              ).animate().fadeIn(duration: 600.ms).scale();
            }).toList(),
          ),
        ],
      ),
    );
  }

  Widget _buildProjectsSection(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType<double>(context: context, mobile: 24, tablet: 64, desktop: 120),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text('03. ', style: GoogleFonts.inter(color: Theme.of(context).primaryColor, fontSize: 24)),
              Expanded(
                flex: 2,
                child: Text('Some Things I\'ve Built', style: Theme.of(context).textTheme.displayMedium?.copyWith(fontSize: 32)),
              ),
              const SizedBox(width: 20),
              Expanded(flex: 3, child: Container(height: 1, color: const Color(0xFF233554))),
            ],
          ).animate().fadeIn(duration: 600.ms).slideX(begin: -0.1, end: 0),
          const SizedBox(height: 40),
          _buildProjectCard(
            context,
            title: 'Project Alpha',
            description: 'A cutting-edge mobile application built with Flutter and Firebase, featuring real-time data synchronization and a sleek dark mode UI.',
            techStack: ['Flutter', 'Firebase', 'Provider'],
          ),
          const SizedBox(height: 40),
          _buildProjectCard(
            context,
            title: 'E-Commerce Dashboard',
            description: 'A responsive web dashboard for managing inventory and user statistics, utilizing RESTful APIs and modern charting libraries.',
            techStack: ['Flutter Web', 'REST API', 'Charts'],
            reverse: true,
          ),
        ],
      ),
    );
  }

  Widget _buildProjectCard(BuildContext context, {required String title, required String description, required List<String> techStack, bool reverse = false}) {
    return GlassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Featured Project',
            style: GoogleFonts.inter(color: Theme.of(context).primaryColor, fontSize: 14, fontWeight: FontWeight.normal),
          ),
          const SizedBox(height: 10),
          Text(
            title,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(fontSize: 28),
          ),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: const Color(0xFF1E1E24).withValues(alpha: 0.8),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              description,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(height: 1.5),
            ),
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 15,
            children: techStack.map((tech) => Text(tech, style: GoogleFonts.inter(color: const Color(0xFF8892B0), fontSize: 14))).toList(),
          ),
        ],
      ),
    ).animate().fadeIn(duration: 800.ms).slideY(begin: 0.1, end: 0);
  }

  Widget _buildContactSection(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: getValueForScreenType<double>(context: context, mobile: 24, tablet: 64, desktop: 120),
      ),
      height: 400,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            '04. What\'s Next?',
            style: GoogleFonts.inter(color: Theme.of(context).primaryColor, fontSize: 16, letterSpacing: 2),
          ),
          const SizedBox(height: 20),
          Text(
            'Get In Touch',
            style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 50),
          ),
          const SizedBox(height: 20),
          Text(
            'Although I\'m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontSize: 18),
          ),
          const SizedBox(height: 50),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.transparent,
              foregroundColor: Theme.of(context).primaryColor,
              side: BorderSide(color: Theme.of(context).primaryColor, width: 2),
              padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 24),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            child: Text('Say Hello', style: GoogleFonts.inter(fontSize: 16, fontWeight: FontWeight.w600)),
          ),
        ],
      ),
    );
  }
}
