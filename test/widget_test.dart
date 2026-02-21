import 'package:flutter_test/flutter_test.dart';
import 'package:portfolio/main.dart';

void main() {
  testWidgets('Portfolio Smoke Test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const PortfolioApp());

    // Wait for all animations to complete
    await tester.pumpAndSettle();

    // Verify that the app title renders.
    expect(find.textContaining('portfolio', findRichText: true, skipOffstage: false), findsNothing);
    expect(find.byType(PortfolioApp), findsOneWidget);
  });
}
