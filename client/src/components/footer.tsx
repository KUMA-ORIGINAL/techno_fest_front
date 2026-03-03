import { Link } from "react-scroll";
import { Terminal, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                TECHNO <span className="text-primary">FEST</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Крупнейший технологический хакатон и фестиваль в Бишкеке. Мы объединяем таланты для создания будущего.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-4">
              {['О событии', 'Направления', 'Программа', 'Призовой фонд', 'FAQ'].map((item, i) => {
                const targets = ['about', 'tracks', 'schedule', 'prizes', 'faq'];
                return (
                  <li key={i}>
                    <Link
                      to={targets[i]}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Кыргызстан, г. Бишкек</li>
              <li>9–11 апреля 2026 г.</li>
              <li><a href="mailto:info@technofest.kg" className="hover:text-primary transition-colors">info@technofest.kg</a></li>
              <li><a href="tel:+996555123456" className="hover:text-primary transition-colors">+996 555 123 456</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2026 TECHNO FEST. Все права защищены.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full bg-accent/50 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
