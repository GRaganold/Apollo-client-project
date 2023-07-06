import graphene
from graphene_django import DjangoObjectType

from backend.models import Users

class UserType(DjangoObjectType):
    class Meta: 
        model = Users 
        fields = '__all__'
        
class Query(graphene.ObjectType):
    all_customers = graphene.List(UserType)
    
    def resolve_all_users(root, info):
        return Users.objects.all()
    
    
# mutation=Mutation
schema = graphene.Schema(query=Query, auto_camelcase=False)