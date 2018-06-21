class TargetClassXXX
  MY_CONST = "MY_CONST"

  # @okuribito
  def self.dead_class_method_xxx
    puts 1
  end

  # @okuribito
  def dead_instance_method_xxx
    puts 2
  end

  def self.active_class_method_xxx
    puts 3
  end

  def active_instance_method_xxx
    puts 4
  end
end

