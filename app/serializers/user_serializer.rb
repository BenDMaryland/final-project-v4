class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :role

end
