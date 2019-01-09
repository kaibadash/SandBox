require 'ripper'
require 'cgi'

class ScanTest < Ripper::Filter
  def on_default(event, tok, f)
    # puts "#{__method__} #{tok} #{event}"
  end

  def on_ident(tok, f)
    puts "#{__method__} #{tok} #{f}"
  end

  def on_comment(tok, f)
    puts "#{__method__} #{tok} #{f}"
  end
end


class OkuribitoYmlGen
  TARGET = "@okuribito"
  def initialize(target)
    @exp = Ripper.sexp_raw(target)
    @parsed = Ripper.lex(target)
    #ScanTest.new(target).parse('')
  end

  # [class => [method]] に parse する
  def parseLex(parsed)
    while (parsed)
  end

  def generate
    @parsed.each do |code|
      next unless code[1] == :on_comment
      next unless code[2].include?(TARGET)
      pp code
      #fill_comment(@exp, code)
    end
  end

  def fill_comment(exp, comment)
    # comment以下にある @indent (method) を探す(同一行に対応するため以下を探す)
    while true do
      ident = next_ident(exp, comment[0][0])
      break if ident.nil?
    end
    # methodを含む [:class を探す
    pp exp
  end

  def next_ident(exp, line)
    while e = exp.length do
      if e
    end
  end
end

target = ARGF.read
$o = OkuribitoYmlGen.new(target)
$o.generate


