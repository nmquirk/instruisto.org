(defproject instruisto "0.1.0-SNAPSHOT"
  
  :description "FIXME: write description"
  
  :url "http://example.com/FIXME"
  
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.0"]
                 [compojure "1.1.0"]
                 [ring/ring-jetty-adapter "1.1.1"]
                 [enfocus "1.0.0-beta3"]]
  
  :source-paths ["src/clj"]
  
  :plugins [[lein-cljsbuild "0.2.9"]]
  
  :cljsbuild {:builds [{:source-path "src/cljs"
                        :compiler {:output-to "resources/public/instruisto.js"
                                   :optimizations :whitespace
                                   :pretty-print true }}]}

  :main instruisto.server)