# frozen-string-literal: true

class Bumblebee < ApplicationRecord
  validates :preferred_flower, presence: true

  enum preferred_flower: {
    rosemary: 'rosemary',
    borage: 'borage',
    foxgloves: 'foxgloves'
  }

  def calculate_social_status
    max = flowers_appereance_counts.max_by { |fac| fac[:count] }
    self.common = (preferred_flower == max[:preferred_flower])

    save
  end

  def flowers_appereance_counts
    Bumblebee.select(
      :preferred_flower, 'COUNT(*) AS count'
    ).group(:preferred_flower)
  end
end
